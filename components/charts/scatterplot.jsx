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
  path.domain {
    display: none;
  }

  & line {
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

const Coords = styled.g`
  font-size: 10px;
  fill: ${Colors.white};
`;

const formatId = (category = '', name = '') => `${category}-${name}`.toLowerCase().replace(/( |-)/gi, '_');

const formatData = ({ categories, data }) => {
  return {
    categories,
    categoryIndexMap: categories.reduce((accum, category, index) => {
      accum[category] = index;

      return accum;
    }, {}),
    data,
  };
};

const Scatterplot = ({
 className, data, height, width 
}) => {
  const xAxisRef = useRef(null);
  const yAxisRef = useRef(null);
  const xAxis = useRef(axisBottom().tickValues([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]));
  const yAxis = useRef(axisLeft().tickValues([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]));

  const formattedData = useRef(formatData(data));

  // const colorScale = useMemo(() => {
  //   return scaleOrdinal(
  //     quantize(interpolateRainbow, ((formattedData.current && formattedData.current.categories) || []).length)
  //   );
  // }, [formattedData.current]);

  const { coords, xScale, yScale } = useMemo(() => {
    const x = scaleLinear()
      .domain([0, 100])
      .range([margin.left, width - margin.right]);

    const y = scaleLinear()
      .domain([0, 100])
      .range([height - margin.bottom, margin.top]);

    const colorScale = scaleOrdinal(
      quantize(interpolateRainbow, ((formattedData.current && formattedData.current.categories) || []).length)
    );

    const newCoords = ((formattedData.current && formattedData.current.data) || []).map(
      ({
 category, experience, interest, name      }) => ({
        transform: `translate(${x(interest)}, ${y(experience)})`,
        name,
        id: formatId(category, name),
        stroke: colorScale(formattedData.current.categoryIndexMap[category]),
      })
    );

    return { coords: newCoords, xScale: x, yScale: y };
  }, [formattedData.current, height, width]);

  useEffect(() => {
    xAxis.current.scale(xScale);
    select(xAxisRef.current).call(xAxis.current);
    yAxis.current.scale(yScale);
    select(yAxisRef.current).call(yAxis.current);
  }, [xScale, yScale]);

  return (
    <svg viewBox={[0, 0, width, height]} className={className}>
      <Coords strokeWidth="1.5">
        {coords.map(({
 id, name, stroke, transform        }) => (
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
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      categorySecondary: PropTypes.string,
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
