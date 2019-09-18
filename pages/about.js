import React from 'react';
import styled from '@emotion/styled';
import HomePage from '../layouts/home';
import Colors from '../styles/colors';
import App from '../styles/constants/app';
import { mqDesktop, mqTablet } from '../styles/screenSize';
import Panel from '../components/layouts/panel';

const AboutContainer = styled.div`
  max-width: ${App.maxWidth};

  ${mqDesktop} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const PictureSubcontainer = styled.div`
  margin-bottom: ${App.double};

  ${mqTablet} {
    max-width: 400px;
    float: left;
    margin-right: ${App.full};
    margin-bottom: ${App.full};
  }
`;

const Text = styled.p`
  font-size: 22px;
  color: ${Colors.textLight};
`;

const UnderDividerText = styled(Text)`
  padding-top: ${App.double};
`;

const Divider = styled.div`
  border-bottom: 1px solid ${Colors.white};
  height: 10px;
  padding-top: ${App.double};
  width: 95%;
  margin: 0 auto;
`;

const AboutLink = styled.a`
  color: ${Colors.gray};

  &:hover {
    opacity: 0.8;
    color: inherit;
  }
`;

const About = () => (
  <HomePage gutters>
    <Panel centerHorizontal centerVertical paddingNavbar={App.tablet}>
      <AboutContainer>
        <div>
          <PictureSubcontainer>
            <img
              className="screen-width-mobile"
              src="/static/img/alex-bonine-the-office.jpg"
              alt="Alex at Michael Scott's desk"
            />
          </PictureSubcontainer>
          <Text>
            My path to becoming a Web developer started in high school when my math league coach suggested I take a new
            C++ course being offered and has taken many twists and turns since.
          </Text>
          <br />
          <Text>
            I worked in labs on embedded systems for the military and developed a crowd-sourced public works Android
            application before ever touching HTML. Along the way, I earned a Bachelor&apos;s degree in Electrical
            Engineering and a Master&apos;s in Systems Engineering and spent plenty of time in coffee shops teaching
            myself new languages and frameworks.
          </Text>
          <br />
          <Text>
            That self-learning hasn&apos;t stopped. I channeled a love of music and curating playlists into a React
            website. I&apos;ve now architected front-ends in both React and Vue for multiple start-ups while developing
            APIs and dynamic engines in Node.
          </Text>
          <br />
          <Text>
            Currently, I am Head of Engineering at&nbsp;
            <AboutLink href="https://www.leaplife.com/" target="_blank">
              LeapLife
            </AboutLink>
            . In my spare time, you can find me at live music venues or wandering the beautiful city of San Francisco.
            Feel free to contact me with any questions or development opportunities.
          </Text>
          <Divider />
          <UnderDividerText>
            This site was made using React with Emotion being server-side rendered by Next and Node. You can find the
            code on&nbsp;
            <AboutLink href="https://github.com/alexbonine/home" target="_blank">
              Github
            </AboutLink>
            . It is still a work in progress.
          </UnderDividerText>
        </div>
      </AboutContainer>
    </Panel>
  </HomePage>
);

About.meta = {
  title: 'About',
  description: 'Alex Bonine About', // todo
};

export default About;
