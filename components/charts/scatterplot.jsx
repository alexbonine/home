import React, { useMemo, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { axisBottom, axisLeft, interpolateRainbow, quantize, scaleLinear, scaleOrdinal, select } from 'd3';
import styled from '@emotion/styled';
// import { HierarchyDataShape } from './chartShapes';
import Colors from '../../styles/colors';

const margin = {
  top: 20,
  right: 20,
  bottom: 40,
  left: 40,
};

const Axis = styled.g`
  & line,
  path.domain {
    stroke: ${Colors.white};
  }

  & text {
    fill: ${Colors.white};
    font-size: 12px;
    font-weight: 600;
  }
`;

const AxisLabel = styled.text`
  text-anchor: middle;
  fill: ${Colors.white};
  font-size: 12px;
  font-weight: 600;
`;

const Grid = styled.g`
  path.domain {
    display: none;
  }

  & line {
    stroke: #3d4046;
  }
`;

const Coords = styled.g`
  font-size: 10px;
  fill: ${Colors.white};
`;

const formatId = (category = '', name = '') => `${category}-${name}`.toLowerCase().replace(/( |-)/gi, '_');

const formatData = ({ categories, data }) => {
  const colorScale = scaleOrdinal(quantize(interpolateRainbow, (categories || []).length));

  return {
    categories,
    categoryColorMap: categories.reduce((accum, category, index) => {
      if (typeof category === 'object' && Colors.grid.hasOwnProperty(category.color)) {
        accum[category.name] = Colors.grid[category.color];
      } else {
        accum[category] = colorScale(index);
      }

      return accum;
    }, {}),
    data,
  };
};

const Scatterplot = ({ className, data, height, width }) => {
  const xAxisRef = useRef(null);
  const yAxisRef = useRef(null);
  const xAxisGridRef = useRef(null);
  const yAxisGridRef = useRef(null);
  const xAxis = useRef(axisBottom().tickValues([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]));
  const yAxis = useRef(axisLeft().tickValues([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]));
  const xAxisGrid = useRef(
    axisBottom()
      .tickValues([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])
      .tickSize(-height + margin.top + margin.bottom)
      .tickFormat('')
  );
  const yAxisGrid = useRef(
    axisLeft()
      .tickValues([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])
      .tickSize(-width + margin.left + margin.right)
      .tickFormat('')
  );

  const formattedData = useRef(formatData(data));

  const { coords, xScale, yScale } = useMemo(() => {
    const x = scaleLinear()
      .domain([0, 100])
      .range([margin.left, width - margin.right]);

    const y = scaleLinear()
      .domain([0, 100])
      .range([height - margin.bottom, margin.top]);

    const newCoords = ((formattedData.current && formattedData.current.data) || []).map(
      ({ category, experience, interest, name }) => ({
        transform: `translate(${x(interest)}, ${y(experience)})`,
        name,
        id: formatId(category, name),
        stroke: formattedData.current.categoryColorMap[category], // colorScale(formattedData.current.categoryColorMap[category])
      })
    );

    return { coords: newCoords, xScale: x, yScale: y };
  }, [formattedData.current, height, width]);

  useEffect(() => {
    xAxis.current.scale(xScale);
    select(xAxisRef.current).call(xAxis.current);
    yAxis.current.scale(yScale);
    select(yAxisRef.current).call(yAxis.current);
    xAxisGrid.current.scale(xScale);
    select(xAxisGridRef.current).call(xAxisGrid.current);
    yAxisGrid.current.scale(yScale);
    select(yAxisGridRef.current).call(yAxisGrid.current);
  }, [xScale, yScale]);

  return (
    <svg viewBox={[0, 0, width, height]} className={className}>
      <Grid ref={xAxisGridRef} transform={`translate(0,${height - margin.bottom})`} />
      <Grid ref={yAxisGridRef} transform={`translate(${margin.left}, 0)`} />
      <Coords strokeWidth="1.5">
        {coords.map(({ id, name, stroke, transform }) => (
          <g transform={transform} key={id}>
            <circle r={3} fill="none" stroke={stroke} />
            <text dy="0.35em" x={7}>
              {name}
            </text>
          </g>
        ))}
      </Coords>
      <Axis ref={xAxisRef} transform={`translate(0, ${height - margin.bottom})`} />
      <AxisLabel id="x-axis-label" x={(margin.right + width) / 2} y={height - 5}>
        Interest
      </AxisLabel>
      <Axis ref={yAxisRef} transform={`translate(${margin.left}, 0)`} />
      <AxisLabel
        id="y-axis-label"
        x={margin.left + margin.right / 2}
        y={(height + margin.top) / 2}
        transform={`rotate(-90, ${margin.left / 2}, ${margin.top + height / 2})`}
      >
        Experience
      </AxisLabel>
    </svg>
  );
};

const ScatterplotDataShape = PropTypes.shape({
  categories: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      categorySecondary: PropTypes.string, // currently unused
      experience: PropTypes.number.isRequired,
      interest: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
});

Scatterplot.propTypes = {
  className: PropTypes.string,
  data: ScatterplotDataShape.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
};

Scatterplot.defaultProps = {
  className: '',
  height: 400,
  width: 500,
};

export default Scatterplot;
