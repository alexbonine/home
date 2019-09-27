import React, { useCallback, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { useTransition, animated } from 'react-spring';
import Panel from '../layouts/panel';
import RadioButtons from '../buttons/radioButtons';
import Sunburst from '../charts/sunburst';
import Line from '../charts/line';
import Scatterplot from '../charts/scatterplot';
import data from '../../utils/skillsData.json';
import interestsData from '../../utils/interestsData.json';
import App from '../../styles/constants/app';
import { flexColumn, flexFull, flexShrinkNone, fullWidth } from '../../styles/flex';
import { MQBreakpoints, mqDesktop, mqTablet } from '../../styles/screenSize';
import useMeasure from '../../hooks/useMeasure';

const SkillsButtonsIds = {
  interests: 'interests-radio',
  timeline: 'timeline-radio',
};

const SkillsButtons = [
  { id: SkillsButtonsIds.interests, text: 'Current' },
  { id: SkillsButtonsIds.timeline, text: 'Over Time' },
];

const ChartMaxHeight = '510px';
const DefaultLineWidth = 600;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChartsContainer = styled.div`
  flex: 1 1 auto;
  padding-top: ${App.full};
  position: relative;
`;

const AnimatedDiv = styled(animated.div)`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const SkillsWrapper = styled.div`
  margin-top: ${App.full};
  width: 600px;
  width: 100%;
  overflow: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-height: ${ChartMaxHeight};

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
  const [selected, setSelected] = useState(SkillsButtonsIds.interests);
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

  const [{ ref }, { width: measureWidth }] = useMeasure(selected === SkillsButtonsIds.timeline);
  const lineWidth = useMemo(() => {
    const measureWidthLessSunburst = measureWidth - DefaultLineWidth;

    // is not initial render
    if (measureWidth) {
      if (measureWidthLessSunburst < MQBreakpoints.mobileMax - DefaultLineWidth) {
        return 0;
      } else if (measureWidthLessSunburst < DefaultLineWidth) {
        return measureWidthLessSunburst;
      }
    }

    return DefaultLineWidth;
  }, [measureWidth]);

  const transitions = useTransition(selected, (p) => p, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

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
    <Panel fullWidth fullHeight gutters title="Skills & Tech" centerHorizontal paddingNavbar>
      <SkillsContainer css={[flexColumn, flexFull]}>
        <RadioButtons css={[flexShrinkNone]} buttons={SkillsButtons} onClick={setSelected} selected={selected} />
        <ChartsContainer css={[fullWidth, flexFull]}>
          {transitions.map(({ item, props }) =>
            item === SkillsButtonsIds.interests ? (
              <AnimatedDiv style={props} key="interests">
                <Scatterplot css={{ maxHeight: ChartMaxHeight }} data={interestsData} />
              </AnimatedDiv>
            ) : (
              <AnimatedDiv style={props} key="timeline">
                <SkillsWrapper ref={ref}>
                  <Sunburst css={[flexShrinkNone]} data={data} setBreadcrumbs={setBreadcrumbs} />
                  {lineWidth > 0 && (
                    <LineContainer>
                      <Line
                        breadcrumbs={state.breadcrumbs}
                        color={state.breadcrumbsColor}
                        data={data}
                        width={lineWidth}
                      />
                    </LineContainer>
                  )}
                </SkillsWrapper>
              </AnimatedDiv>
            ))}
        </ChartsContainer>
      </SkillsContainer>
    </Panel>
  );
};

export default Skills;
