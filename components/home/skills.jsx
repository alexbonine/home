import React, { useCallback, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import Panel from '../layouts/panel';
import Sunburst from '../charts/sunburst';
import Line from '../charts/line';
import data from '../../utils/skillsData.json';
import App from '../../styles/constants/app';
import { flexShrinkNone } from '../../styles/flex';
import { MQBreakpoints, mqDesktop, mqTablet } from '../../styles/screenSize';
import useMeasure from '../../hooks/useMeasure';

const SkillsContainer = styled.div`
  max-width: ${App.maxWidth};
  width: 100%;
  display: flex;
  flex-direction: column;
`;

// const Text = styled.p`
//   font-size: 2em;
//   font-family: 'Playfair Display', serif;
//   color: ${HomepageStyles.textMain};
// `;

const SkillsWrapper = styled.div`
  margin-top: 16px;
  width: 600px;
  width: 100%;
  overflow: auto;
  display: flex;
  align-items: center;
  flex-direction: column;

  ${mqTablet} {
    flex-direction: row;
    justify-content: space-around;
  }

  ${mqDesktop} {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const LineContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  justify-content: flex-end;
`;

const Skills = () => {
  const [state, setState] = useState({
    breadcrumbs: [],
    breadcrumbsColor: '',
    data,
  });

  const setBreadcrumbs = useCallback(
    (breadcrumbs, breadcrumbsColor) => {
      setState({
        breadcrumbs,
        breadcrumbsColor,
      });
    },
    [setState]
  );

  const [{ ref }, { width: measureWidth }] = useMeasure();
  const lineWidth = useMemo(() => {
    const defaultChartWidth = 500;
    const measureWidthLessSunburst = measureWidth - defaultChartWidth;

    // is not initial render
    if (measureWidth) {
      if (measureWidthLessSunburst < MQBreakpoints.mobileMax - defaultChartWidth) {
        return 0;
      } else if (measureWidthLessSunburst < defaultChartWidth) {
        return measureWidthLessSunburst;
      }
    }

    return defaultChartWidth;
  }, [measureWidth]);

  // componentDidMount() {
  //   Promise.all([
  //     fetch(`${process.env.PUBLIC_URL || ""}/sf.json`),
  //     fetch(`${process.env.PUBLIC_URL || ""}/ny.json`)
  //   ])
  //     .then(responses => Promise.all(responses.map(resp => resp.json())))
  //     .then(([sf, ny]) => {
  //       sf.forEach(day => (day.date = new Date(day.date)));
  //       ny.forEach(day => (day.date = new Date(day.date)));

  //       this.setState({ temps: { sf, ny } });
  //     });
  // }

  return (
    <Panel title="Skills & Tech" centerHorizontal paddingNavbar>
      <SkillsContainer>
        <SkillsWrapper ref={ref}>
          <Sunburst css={[flexShrinkNone]} data={data} setBreadcrumbs={setBreadcrumbs} />
          {lineWidth > 0 && (
            <LineContainer>
              <Line breadcrumbs={state.breadcrumbs} color={state.breadcrumbsColor} data={data} width={lineWidth} />
            </LineContainer>
          )}
        </SkillsWrapper>
      </SkillsContainer>
    </Panel>
  );
};

export default Skills;
