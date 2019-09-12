import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { arc, format, hierarchy, interpolateRainbow, partition, quantize, scaleOrdinal } from 'd3';
import { HierarchyDataShape } from './chartShapes';
import Colors from '../../styles/colors';

const SunburstSvg = styled.svg`
  max-width: 100%;
  width: 500px;
  height: auto;
  flex-shrink: 1 1 auto;
  margin: 5px;
  font: 13px 'Playfair Display', sans-serif;
  font-weight: 600;
  cursor: pointer;
  /* display: block; */

  & text {
    fill: ${Colors.white};
  }
`;

const width = 975;
const radius = width / 2;

const formatTitle = format(',d');

const arcLine = arc()
  .startAngle((d) => d.x0)
  .endAngle((d) => d.x1)
  .padAngle((d) => Math.min((d.x1 - d.x0) / 2, 0.005))
  .padRadius(radius / 2)
  .innerRadius((d) => d.y0)
  .outerRadius((d) => d.y1 - 1);

const partionData = (data) =>
  partition().size([2 * Math.PI, radius])(
    hierarchy(data)
      .sum((d) => d.value)
      .sort((a, b) => b.value - a.value)
  );

const getBreadcrumbTrail = (node) => {
  const trail = [];
  let current = node;

  while (current.parent) {
    trail.unshift(current.data.name);
    current = current.parent;
  }

  return trail;
};

const Sunburst = ({ data, setBreadcrumbs }) => {
  const svgRef = useRef(null);
  const g1Ref = useRef(null);
  const g2Ref = useRef(null);
  // const removeTimeout = useRef(null);

  const mouseover = useCallback(
    (node, color) => {
      const breadcrumbs = getBreadcrumbTrail(node);
      setBreadcrumbs(breadcrumbs, color);
      for (let i = 0; i < svgRef.current.children[0].children.length; i++) {
        const child = svgRef.current.children[0].children[i];

        if (breadcrumbs.indexOf(child.dataset.name) >= 0) {
          child.style.opacity = 1;
        } else {
          child.style.opacity = 0.3;
        }
      }
    },
    [setBreadcrumbs]
  );

  const mouseleave = useCallback(
    (e) => {
      for (let i = 0; i < svgRef.current.children[0].children.length; i++) {
        const child = svgRef.current.children[0].children[i];
        child.style.transition = 'opacity 1000ms';
        child.style.opacity = 1;
      }

      // removeTimeout.current = setTimeout(() => {
      //   setBreadcrumbs([]);
      //   removeTimeout.current = null;
      // }, 1000);
    },
    [setBreadcrumbs]
  );

  const colorScale = useMemo(() => {
    return scaleOrdinal(quantize(interpolateRainbow, data.children.length + 1));
  }, [data]);

  const partitionedData = useMemo(() => partionData(data), [data]);
  const pieSlices = useMemo(
    () =>
      partitionedData
        .descendants()
        .filter((d) => d.depth)
        .map((node) => {
          let colorNode = node;
          while (colorNode.depth > 1) {
            colorNode = colorNode.parent;
          }
          const color = colorScale(colorNode.data.name);
          const title = `${node
            .ancestors()
            .map((d) => d.data.name)
            .reverse()
            .join('/')}\n${formatTitle(node.value)}`;

          return {
            color,
            d: arcLine(node),
            name: node.data.name,
            onMouseOver: () => mouseover(node, color),
            title,
          };
        }),
    [colorScale, mouseover, partitionedData]
  );

  const textSlices = useMemo(
    () =>
      partitionedData
        .descendants()
        .filter((d) => d.depth && ((d.y0 + d.y1) / 2) * (d.x1 - d.x0) > 10)
        .map((node) => {
          let colorNode = node;
          while (colorNode.depth > 1) {
            colorNode = colorNode.parent;
          }
          const color = colorScale(colorNode.data.name);
          const x = (((node.x0 + node.x1) / 2) * 180) / Math.PI;
          const y = (node.y0 + node.y1) / 2;
          const transform = `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;

          return {
            dy: '0.35em',
            text: node.data.name,
            transform,
            onMouseOver: () => mouseover(node, color),
          };
        }),
    [colorScale, mouseover, partitionedData]
  );

  useEffect(() => {
    if (svgRef.current) {
      const { x, y, width, height       } = svgRef.current.getBBox();
      svgRef.current.setAttribute('viewBox', `${x},${y},${width},${height}`);
    }

    // return () => {
    //   if (removeTimeout.current) {
    //     clearTimeout(removeTimeout.current);
    //   }
    // };
  }, []);

  return (
    <SunburstSvg ref={svgRef} className="sunburst" onMouseLeave={mouseleave}>
      <g ref={g1Ref} fillOpacity=".6">
        {pieSlices.map(({ color, d, name, onMouseOver, title }) => (
           <path d={d} data-name={name} fill={color} key={`pie-${title}`} onMouseOver={onMouseOver} title={title} />
        ))}
      </g>
      <g ref={g2Ref} pointerEvents="none" textAnchor="middle">
        {textSlices.map(({ dy, text, onMouseOver, transform }) => (
           <text dy={dy} data-name={text} key={`text-${text}`} onMouseOver={onMouseOver} transform={transform}>
    {text}
  </text>
        ))}
      </g>
    </SunburstSvg>
  );
};

Sunburst.propTypes = {
  data: HierarchyDataShape.isRequired,
  setBreadcrumbs: PropTypes.func.isRequired,
};

// const Sunburst = ({ data, setBreadcrumbs }) => {
//   const svg = useRef();
//   const svgRef = useRef(null);
//   const g1Ref = useRef(null);
//   const g2Ref = useRef(null);

//   const mouseover = useCallback(
//     node => {
//       d3.selectAll(".sunburst path").style("opacity", 0.3);
//       const breadcrumbs = getBreadcrumbTrail(node);
//       setBreadcrumbs(breadcrumbs);
//       svg.current
//         .selectAll("path")
//         .filter(function(curr) {
//           return breadcrumbs.indexOf(curr) >= 0;
//         })
//         .style("opacity", 1);
//     },
//     [setBreadcrumbs]
//   );

//   const mouseleave = useCallback(
//     e => {
//       d3.selectAll("path").on("mouseover", null);
//       d3.selectAll("path")
//         .transition()
//         .duration(1e3)
//         .style("opacity", 1)
//         .on("end", function() {
//           d3.select(this).on("mouseover", mouseover);
//         });
//     },
//     [mouseover]
//   );

//   const colorScale = useMemo(() => {
//     return d3.scaleOrdinal(
//       d3.quantize(d3.interpolateRainbow, data.children.length + 1)
//     );
//   }, [data]);

//   useEffect(() => {
//     const partitionedData = partionData(data);
//     const createSunburst = async () => {
//       await svg.current.node();

//       svg.current.attr("viewBox", autoBox);
//     };

//     if (svgRef.current) {
//       svg.current = d3.select(svgRef.current).on("mouseleave", mouseleave);

//       d3.select(g1Ref.current)
//         .attr("fill-opacity", 0.6)
//         .selectAll("path")
//         .data(partitionedData.descendants().filter(d => d.depth))
//         .enter()
//         .append("path")
//         .attr("fill", d => {
//           while (d.depth > 1) d = d.parent;
//           return colorScale(d.data.name);
//         })
//         .attr("d", arc)
//         .on("mouseover", mouseover)
//         .append("title")
//         .text(
//           d =>
//             `${d
//               .ancestors()
//               .map(d => d.data.name)
//               .reverse()
//               .join("/")}\n${format(d.value)}`
//         );

//       d3.select(g2Ref.current)
//         .selectAll("text")
//         .data(
//           partitionedData
//             .descendants()
//             .filter(d => d.depth && ((d.y0 + d.y1) / 2) * (d.x1 - d.x0) > 10)
//         )
//         .enter()
//         .append("text")
//         .attr("transform", function(d) {
//           const x = (((d.x0 + d.x1) / 2) * 180) / Math.PI;
//           const y = (d.y0 + d.y1) / 2;
//           return `rotate(${x -
//             90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
//         })
//         .attr("dy", "0.35em")
//         .text(d => d.data.name)
//         .on("mouseover", mouseover);

//       createSunburst(svg);
//     }
//   }, [colorScale, data, svg, mouseover, mouseleave]);

//   return (
//     <svg ref={svgRef} className="sunburst">
//       <g ref={g1Ref} fillOpacity=".6" />
//       <g ref={g2Ref} pointerEvents="none" textAnchor="middle" />
//     </svg>
//   );
// };

export default Sunburst;
