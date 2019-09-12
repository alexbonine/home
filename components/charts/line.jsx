import React, { useMemo, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { axisBottom, axisLeft, curveBasis, line, scaleLinear, select } from 'd3';
import styled from '@emotion/styled';
import { HierarchyDataShape } from './chartShapes';
import Colors from '../../styles/colors';

// todo add label?

const Axis = styled.g`
  & line,
  & path {
    stroke: ${Colors.white};
    stroke-width: 2px;
    shape-rendering: geometricPrecision;
  }

  & text {
    fill: ${Colors.white};
    font-size: 12px;
  }
`;

const XAxis = styled(Axis)`
  & text {
    transform: translate(0, 5px);
  }
`;

const YAxis = styled(Axis)`
  & text {
    transform: translate(-5px, 0);
  }
`;

const width = 500;
const height = 400;
const margin = {
  top: 20,
  right: 20,
  bottom: 30,
  left: 40,
};

const formatBreadcrumbName = (name = '') => name.toLowerCase().replace(/ /i, '_');

const getBreadcrumbName = (breadcrumbs = []) => formatBreadcrumbName(breadcrumbs.join('.'));

const formatData = (data, prefix = '') => {
  if (data.children && data.children.length) {
    const childrenData = data.children.reduce((accum, child) => {
      return {
        ...accum,
        ...formatData(child, `${prefix}${prefix.length ? '.' : ''}${formatBreadcrumbName(child.name)}`),
      };
    }, {});
    const childKeys = Object.keys(childrenData);
    const totals = childKeys.reduce(
      (accum, childName) => {
        for (let i = 0; i < accum.length; i += 1) {
          accum[i] += childrenData[childName][i];
        }

        return accum;
      },
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    );
    childrenData[prefix] = totals.map((total) => Math.round(total / childKeys.length)); // todo use by %?

    return childrenData;
  }

  return { [`${prefix}`]: data.proficiency };
};

const Line = ({ breadcrumbs, color, data }) => {
  const xAxisRef = useRef(null);
  const yAxisRef = useRef(null);
  const xAxis = useRef(
    axisBottom()
      .tickFormat((d) => `${d}`)
      .tickValues([2007, 2010, 2013, 2016, 2019])
  );
  const yAxis = useRef(axisLeft().tickValues([20, 40, 60, 80, 100]));
  const breadcrumbName = getBreadcrumbName(breadcrumbs);

  const formattedData = useRef(formatData(data));

  // const colorScale = useMemo(() => {
  //   return d3.scaleOrdinal(
  //     d3.quantize(d3.interpolateRainbow, data.children.length + 1)
  //   );
  // }, [data]);

  const { xScale, yScale, lineDrawer } = useMemo(() => {
    const x = scaleLinear()
      .domain([2007, 2019])
      .range([margin.left, width - margin.right]);

    const y = scaleLinear()
      .domain([0, 100])
      .range([height - margin.bottom, margin.top]);

    const lineDraw = line()
      .x((d, index) => xScale(2007 + index))
      .y((d) => yScale(d))
      .curve(curveBasis); // d3.curveCatmullRom.alpha(1)

    return { xScale: x, yScale: y, lineDrawer: lineDraw };
  }, []);

  useEffect(() => {
    xAxis.current.scale(xScale);
    select(xAxisRef.current)
      // .attr('class', xAxisClassName.name)
      .call(xAxis.current);
    yAxis.current.scale(yScale);
    select(yAxisRef.current)
      // .attr('class', yAxisClassName.name)
      .call(yAxis.current);
  }, [xScale, yScale]);

  const lines = formattedData.current[breadcrumbName]
    ? [
      {
        d: lineDrawer(formattedData.current[breadcrumbName]),
        id: breadcrumbName,
        stroke: color, // colorScale(1), // based on lines showing
      },
    ]
    : [];

  // console.log(formattedData[breadcrumbName]);
  // console.log(
  //   breadcrumbName,
  //   formattedData.current,
  //   formattedData.current[breadcrumbName]
  // );

  return (
    <svg width={width} height={height}>
      {lines.map(({ d, stroke, id }) => (
        <path d={d} fill="none" key={id} stroke={stroke} strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" />
      ))}
      <XAxis ref={xAxisRef} transform={`translate(0, ${height - margin.bottom})`} />
      <YAxis ref={yAxisRef} transform={`translate(${margin.left}, 0)`} />
    </svg>
  );
};

Line.propTypes = {
  breadcrumbs: PropTypes.arrayOf(PropTypes.string).isRequired,
  color: PropTypes.string,
  data: HierarchyDataShape.isRequired,
};

Line.defaultProps = {
  color: '',
};

export default Line;
