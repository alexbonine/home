import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import Panel from '../layouts/panel';
import Sunburst from '../charts/sunburst';
import Line from '../charts/line';
import data from '../../utils/skillsData.json';
import App from '../../styles/constants/app';
// import HomepageStyles from '../../styles/components/homepage';

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
  justify-content: space-around;
  align-items: center;
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
        <SkillsWrapper>
          <Sunburst data={data} setBreadcrumbs={setBreadcrumbs} />
          <Line breadcrumbs={state.breadcrumbs} color={state.breadcrumbsColor} data={data} />
        </SkillsWrapper>
      </SkillsContainer>
    </Panel>
  );
};

export default Skills;
