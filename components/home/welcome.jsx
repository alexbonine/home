import React from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/core';
import Colors from '../../styles/colors';
import App from '../../styles/constants/app';
import { GlitchConstants } from '../../styles/constants/animations';
import GlitchImage from './glitchImage';
// import Panel from '../layouts/panel';
import panel from '../../styles/components/panel';
import { flexCenterAll } from '../../styles/flex';

const GlitchText = keyframes`
  0% {
      transform: translate3d(calc(-1 * ${GlitchConstants.gapHorizontal}), 0, 0) scale3d(-1, -1, 1);
      -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
      clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
  }
  2% {
      -webkit-clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
      clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
  }
  4% {
      -webkit-clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
      clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
  }
  5% {
      -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
      clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
  }
  6% {
      -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
      clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
  }
  7% {
      -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
      clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
  }
  8% {
      -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
      clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
  }
  9% {
      -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
      clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
  }
  9.9% {
      transform: translate3d(calc(-1 * ${GlitchConstants.gapHorizontal}), 0, 0) scale3d(-1, -1, 1);
  }
  10%,
  100% {
      transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
      -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
`;

const TitleContainer = styled.div`
  margin: ${App.headerHeight} 0 0 0;
  position: relative;
`;

const Title = styled.h2`
  font-size: 10em;
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  animation-delay: calc(${GlitchConstants.delayAnim} + ${GlitchConstants.timeAnim} * 0.2);
  color: ${Colors.textLight};
  margin-top: 0.83em;
`;

const SubTitle = styled.p`
  font-family: 'IM Fell English', serif;
  font-size: 1.5em;
  max-width: 600px;
  font-weight: 400;
  animation-delay: calc(${GlitchConstants.delayAnim} + ${GlitchConstants.timeAnim} * 0.25);
  color: ${Colors.textLight};
`;

const glitchText = css`
  animation-name: ${GlitchText};
  animation-duration: ${GlitchConstants.timeAnim};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

const Welcome = () => {
  return (
    <div className="loaded" css={[panel, flexCenterAll]}>
      <GlitchImage />
      <TitleContainer>
        <Title css={glitchText}>Alex Bonine</Title>
        <SubTitle css={glitchText}>
          Hello! I&apos;m a Lead Software Engineer with over a decade of experience. I started on TI-86 calculators,
          went pro writing satellite communications, led the mobile team at a logistics company, architected the
          adoption of React in a growing start-up, and most recently used Node and Vue to develop the entire stack at a
          tiny start-up.
        </SubTitle>
      </TitleContainer>
    </div>
  );
};

export default Welcome;

// {
//   <div class="contentSection">
//           <h2 class="contentTitle">Alex Bonine</h2>
//           <p class="contentText">
//             Hello! I'm a Front-End Web Developer with over a decade of experience in software. I started on TI-86
//             calculators, went pro writing satellite communications at Rockwell Collins before leading the mobile team at
//             Coyote Logistics.
//           </p>
//         </div>
//     </div>
// }
