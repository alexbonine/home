import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import HomePage from '../layouts/home';
import panel from '../styles/components/panel';
import { flexCenterAll } from '../styles/flex';
import Colors from '../styles/colors';

const ContactContainer = styled.div`
  height: 80vh;
  width: 80vw;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactSubcontainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 2.75em;
`;

const ContactLink = styled.a`
  color: ${Colors.white};
  font-size: 2em;
  display: block;

  &:hover {
    opacity: 0.8;
    color: inherit;
  }
`;

const IconBar = styled.ul``;

const Icon = styled.a`
  margin: 0 0.4em;
  padding: 1em;
  display: inline-block;
  font-weight: 400;
  font-size: 0.9em;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -moz-transition: all 350ms ease;
  -webkit-transition: all 350ms ease;
  -o-transition: all 350ms ease;
  -ms-transition: all 350ms ease;
  transition: all 350ms ease;

  svg {
    width: 48px;
    height: 48px;
    display: block;

    path {
      fill: ${Colors.white};
      -moz-transition: all 450ms ease;
      -webkit-transition: all 450ms ease;
      -o-transition: all 450ms ease;
      -ms-transition: all 450ms ease;
      transition: all 450ms ease;
    }
  }
`;

const IconLinkedin = styled(Icon)`
  &:hover svg path {
    fill: #4875b4;
  }
`;

const IconFacebook = styled(Icon)`
  &:hover svg path {
    fill: #3b5998;
  }
`;

const IconGithub = styled(Icon)`
  &:hover svg path {
    fill: #55acee;
  }
`;

const Contact = () => (
  <HomePage>
    <div css={css({ backgroundColor: Colors.green, color: Colors.white }, [panel, flexCenterAll])}>
      <ContactContainer>
        <ContactSubcontainer>
          <Title>Say hello!</Title>
          <br />
          <ContactLink href="mailto:hello@alexbonine.com">hello@alexbonine.com</ContactLink>
          <br />
          <ContactLink href="static/resume.pdf" target="_blank">
            resume
          </ContactLink>
          <IconBar>
            <li>
              <IconLinkedin id="icon-linkedin" href="https://www.linkedin.com/in/alexbonine" target="_blank">
                <svg
                  height="1000"
                  width="1036"
                  viewBox="0 0 1000 1036"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 120q0-50 35-82.5t91-32.5q55 0 89 32 35 33 35 86 0 48-34 80-35 33-92 33l-1 0q-55 0-89-33t-34-83zm13 875l0-668l222 0l0 668l-222 0zm345 0l222 0l0-373q0-35 8-54 14-34 42.5-57.5t71.5-23.5q112 0 112 151l0 357l222 0l0-383q0-148-70-224.5t-185-76.5q-129 0-201 111l0 2l-1 0l1-2l0-95l-222 0q2 32 2 199t-2 469z"
                    fill="#000000"
                  />
                </svg>
              </IconLinkedin>
            </li>
            <li>
              <IconFacebook id="icon-facebook" href="https://www.facebook.com/agbonine" target="_blank">
                <svg
                  width="512px"
                  height="512px"
                  viewBox="0 0 512 512"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M204.067,184.692h-43.144v70.426h43.144V462h82.965V254.238h57.882l6.162-69.546h-64.044c0,0,0-25.97,0-39.615c0-16.398,3.302-22.89,19.147-22.89c12.766,0,44.896,0,44.896,0V50c0,0-47.326,0-57.441,0c-61.734,0-89.567,27.179-89.567,79.231C204.067,174.566,204.067,184.692,204.067,184.692z" />
                </svg>
              </IconFacebook>
            </li>
            <li>
              <IconGithub id="icon-github" href="https://github.com/alexbonine" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.0"
                  width="120.000000pt"
                  height="120.000000pt"
                  viewBox="0 0 120.000000 120.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g fill="#000000" stroke="none">
                    <path d="M45.2 3 c-10.9 2.9 -18.7 7.4 -27.2 16 -8.7 8.6 -13.1 16.3 -16 27.6 -3.6 14.1 -1.8 29.4 5.2 42.7 4.8 9.2 16.4 20.5 25.9 25.1 10.4 5.1 11.3 4.8 11.7 -3.6l0.3 -6.6 -6 -0c-7.5 -0 -11.2 -2.1 -14.6 -8.3 -1.4 -2.6 -4 -5.9 -5.7 -7.4 -2.1 -1.8 -2.8 -2.9 -2 -3.7 1.3 -1.3 5.5 -0 4.6 1.4 -0.5 0.7 -0.1 0.9 0.8 0.5 0.9 -0.3 2.5 0.4 3.7 1.7 2.2 2.3 2.8 4.2 1.1 3.1 -0.5 -0.3 -1 -0.1 -1 0.5 0 0.7 0.6 1 1.3 0.7 0.6 -0.2 2.2 0.5 3.4 1.6 2.3 2.1 10.9 3.4 12.9 2 0.5 -0.4 1.9 -2.7 3 -4.9l2 -4.2 -4.5 -0.6c-5.7 -0.8 -14.2 -5.5 -17.1 -9.6 -3.2 -4.4 -5 -11.3 -5 -18.6 0 -4.9 0.6 -7.3 2.8 -11.5 2.2 -4.2 2.7 -6.4 2.4 -9.7 -0.2 -2.3 -0.1 -5.8 0.2 -7.7 0.6 -3 1.1 -3.5 3.5 -3.5 1.6 -0 5.4 1.3 8.5 2.9 5.5 2.8 5.9 2.8 13.2 1.8 5.3 -0.8 9.5 -0.8 14.8 -0 7.3 1 7.7 1 13.2 -1.8 3.1 -1.6 6.9 -2.9 8.5 -2.9 2.4 -0 2.9 0.5 3.5 3.5 0.3 1.9 0.4 5.4 0.2 7.7 -0.3 3.3 0.2 5.5 2.4 9.7 5.1 9.7 3.2 24.7 -4.1 32 -3.9 3.9 -13 8.1 -17.7 8.1 -2.4 -0 -2.4 -0 -0.7 2.7 1.4 2.1 1.9 5.5 2.3 15.2 0.6 15.1 0.6 15.1 11.7 9.6 29.7 -14.7 41.5 -50.6 26.6 -80.8 -4.6 -9.1 -16 -20.8 -25 -25.5 -13.2 -6.9 -29.1 -8.8 -43.1 -5.2z" />
                  </g>
                </svg>
              </IconGithub>
            </li>
          </IconBar>
        </ContactSubcontainer>
      </ContactContainer>
    </div>
  </HomePage>
);

Contact.meta = {
  title: 'Contact',
  description: 'Alex Bonine Contact', // todo
};

export default Contact;
