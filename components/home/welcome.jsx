import React from 'react';
import { keyframes, css, Global } from '@emotion/core';
import styled from '@emotion/styled';
import Colors from '../../styles/colors';

const Panel = styled.div`
  position: relative;
  display: grid;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  min-height: 100vh;
`; // todo make global?

const GlitchContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Constants = {
  gapHorizontal: '10px',
  gapVertical: '5px',
  timeAnim: '4s',
  delayAnim: '2s',
  blendMode1: 'none',
  blendMode2: 'overlay',
  blendMode3: 'none',
  blendMode4: 'none',
  blendMode5: 'overlay',
  blendMode1: 'transparent',
  blendMode2: '#7d948e',
  blendMode3: 'transparent',
  blendMode4: 'transparent',
  blendMode5: '#af4949',
};

const Glitch2 = keyframes`
  0% {
      opacity: 1;
      transform: translate3d(${Constants.gapHorizontal}, 0, 0);
      -webkit-clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
      clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
  }
  2% {
      -webkit-clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
      clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
  }
  4% {
      -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
      clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
  }
  6% {
      -webkit-clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
      clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
  }
  8% {
      -webkit-clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
      clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
  }
  10% {
      -webkit-clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
      clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
  }
  12% {
      -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
      clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
  }
  14% {
      -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
      clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
  }
  16% {
      -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
      clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
  }
  18% {
      -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
      clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
  }
  20% {
      -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
      clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
  }
  21.9% {
      opacity: 1;
      transform: translate3d(${Constants.gapHorizontal}, 0, 0);
  }
  22%,
  100% {
      opacity: 0;
      transform: translate3d(0, 0, 0);
      -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
  }
`;

const Glitch3 = keyframes`
  0% {
      opacity: 1;
      transform: translate3d(calc(-1 * ${Constants.gapHorizontal}), 0, 0);
      -webkit-clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
      clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
  }
  3% {
      -webkit-clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
      clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
  }
  5% {
      -webkit-clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%);
      clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%);
  }
  7% {
      -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
      clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
  }
  9% {
      -webkit-clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%);
      clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%);
  }
  11% {
      -webkit-clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%);
      clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%);
  }
  13% {
      -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
      clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
  }
  15% {
      -webkit-clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%);
      clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%);
  }
  17% {
      -webkit-clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%);
      clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%);
  }
  19% {
      -webkit-clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);
      clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);
  }
  20% {
      -webkit-clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%);
      clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%);
  }
  21.9% {
      opacity: 1;
      transform: translate3d(calc(-1 * ${Constants.gapHorizontal}), 0, 0);
  }
  22%,
  100% {
      opacity: 0;
      transform: translate3d(0, 0, 0);
      -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
  }
`;

const Glitch4 = keyframes`
  0% {
      opacity: 1;
      transform: translate3d(0, calc(-1 * ${Constants.gapVertical}), 0) scale3d(-1, -1, 1);
      -webkit-clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%);
      clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%);
  }
  1.5% {
      -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 9%, 0 9%);
      clip-path: polygon(0 10%, 100% 10%, 100% 9%, 0 9%);
  }
  2% {
      -webkit-clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%);
      clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%);
  }
  2.5% {
      -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
      clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
  }
  3% {
      -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%);
      clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%);
  }
  5% {
      -webkit-clip-path: polygon(0 30%, 100% 30%, 100% 25%, 0 25%);
      clip-path: polygon(0 30%, 100% 30%, 100% 25%, 0 25%);
  }
  5.5% {
      -webkit-clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%);
      clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%);
  }
  7% {
      -webkit-clip-path: polygon(0 40%, 100% 40%, 100% 39%, 0 39%);
      clip-path: polygon(0 40%, 100% 40%, 100% 39%, 0 39%);
  }
  8% {
      -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
      clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
  }
  9% {
      -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 55%, 0 55%);
      clip-path: polygon(0 60%, 100% 60%, 100% 55%, 0 55%);
  }
  10.5% {
      -webkit-clip-path: polygon(0 30%, 100% 30%, 100% 31%, 0 31%);
      clip-path: polygon(0 30%, 100% 30%, 100% 31%, 0 31%);
  }
  11% {
      -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 69%, 0 69%);
      clip-path: polygon(0 70%, 100% 70%, 100% 69%, 0 69%);
  }
  13% {
      -webkit-clip-path: polygon(0 40%, 100% 40%, 100% 41%, 0 41%);
      clip-path: polygon(0 40%, 100% 40%, 100% 41%, 0 41%);
  }
  14% {
      -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 75%, 0 75%);
      clip-path: polygon(0 80%, 100% 80%, 100% 75%, 0 75%);
  }
  14.5% {
      -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%);
      clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%);
  }
  15% {
      -webkit-clip-path: polygon(0 90%, 100% 90%, 100% 90%, 0 90%);
      clip-path: polygon(0 90%, 100% 90%, 100% 90%, 0 90%);
  }
  16% {
      -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
      clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
  }
  18% {
      -webkit-clip-path: polygon(0 100%, 100% 100%, 100% 99%, 0 99%);
      clip-path: polygon(0 100%, 100% 100%, 100% 99%, 0 99%);
  }
  20% {
      -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 71%, 0 71%);
      clip-path: polygon(0 70%, 100% 70%, 100% 71%, 0 71%);
  }
  21.9% {
      opacity: 1;
      transform: translate3d(0, calc(-1 * ${Constants.gapVertical}), 0) scale3d(-1, -1, 1);
  }
  22%,
  100% {
      opacity: 0;
      transform: translate3d(0, 0, 0);
      -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
  }
`;

const GlitchText = keyframes`
  0% {
      transform: translate3d(calc(-1 * ${Constants.gapHorizontal}), 0, 0) scale3d(-1, -1, 1);
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
      transform: translate3d(calc(-1 * ${Constants.gapHorizontal}), 0, 0) scale3d(-1, -1, 1);
  }
  10%,
  100% {
      transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
      -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
`;

const glitchFlash = keyframes`
  0%,
  5% {
    opacity: 0.2;
    transform: translate3d(${Constants.gapHorizontal}, ${Constants.gapVertical}, 0);
  }
  5.5%,
  100% {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
`;

const Glitch = styled.div`
  position: absolute;
  top: calc(-1 * ${Constants.gapHorizontal});
  left: calc(-1 * ${Constants.gapHorizontal});
  width: calc(100% + ${Constants.gapHorizontal} * 2);
  height: calc(100% + ${Constants.gapVertical} * 2);
  background: url(/static/palace-of-fine-arts.jpg) no-repeat 50% 0;
  background-color: ${Constants.blendColor1};
  background-size: cover;
  transform: translate3d(0, 0, 0);
  background-blend-mode: ${Constants.blendMode1};

  &:nth-of-type(n + 2) {
    opacity: 0;
  }

  .loaded &:nth-of-type(n + 2) {
    animation-duration: ${Constants.timeAnim};
    animation-delay: ${Constants.delayAnim};
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .loaded &:nth-of-type(2) {
    background-color: ${Constants.blendColor2};
    background-blend-mode: ${Constants.blendMode2};
    animation-name: ${Glitch2};
  }

  .loaded &:nth-of-type(3) {
    background-color: ${Constants.blendColor3};
    background-blend-mode: ${Constants.blendMode3};
    animation-name: ${Glitch3};
  }

  .loaded &:nth-of-type(4) {
    background-color: ${Constants.blendColor4};
    background-blend-mode: ${Constants.blendMode4};
    animation-name: ${Glitch4};
  }

  .loaded &:nth-of-type(5) {
    background-color: ${Constants.blendColor4};
    background-blend-mode: ${Constants.blendMode4};
    animation-name: ${glitchFlash};
  }
`;

const TitleContainer = styled.div`
  margin: 10vh 0 0 0;
  position: relative;
`;

const Title = styled.h2`
  font-size: 12vw;
  font-family: 'Playfair Display', serif;
  animation-delay: calc(${Constants.delayAnim} + ${Constants.timeAnim} * 0.2);
  color: ${Colors.textLight};
`;

const SubTitle = styled.p`
  font-family: 'IM Fell English', serif;
  margin-top: -10vw;
  font-size: 1.5em;
  max-width: 600px;
  font-weight: 400;
  animation-delay: calc(${Constants.delayAnim} + ${Constants.timeAnim} * 0.25);
  color: ${Colors.textLight};
`;

class Welcome extends React.Component {
  render() {
    return (
      <Panel className="loaded">
        <GlitchContainer>
          <Glitch />
          <Glitch />
          <Glitch />
          <Glitch />
          <Glitch />
        </GlitchContainer>
        <TitleContainer>
          <Title>Alex Bonine</Title>
          <SubTitle>
            Hello! I'm a Front-End Web Developer with over a decade of experience in software. I started on TI-86
            calculators, went pro writing satellite communications at Rockwell Collins before leading the mobile team at
            Coyote Logistics.
          </SubTitle>
        </TitleContainer>
      </Panel>
    );
  }
}

export default Welcome;

{
  /* <div class="contentSection">
          <h2 class="contentTitle">Alex Bonine</h2>
          <p class="contentText">
            Hello! I'm a Front-End Web Developer with over a decade of experience in software. I started on TI-86
            calculators, went pro writing satellite communications at Rockwell Collins before leading the mobile team at
            Coyote Logistics.
          </p>
        </div>
    </div> */
}
