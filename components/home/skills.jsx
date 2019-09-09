import React from 'react';
import styled from '@emotion/styled';
import Panel from '../layouts/panel';
import HomepageStyles from '../../styles/components/homepage';

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  font-size: 2em;
  font-family: 'Playfair Display', serif;
  color: ${HomepageStyles.textMain};
`;

const Skills = () => {
  return (
    <Panel title="Skills & Tech" centerHorizontal paddingNavbar>
      <SkillsContainer>
        <Text>Expert experience with</Text>
        <Text>Experience with</Text>
        <Text>Can't believe I used to be paid for these</Text>
      </SkillsContainer>
    </Panel>
  );
};

export default Skills;
