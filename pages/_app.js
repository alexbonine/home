/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import App, { Container } from 'next/app';
import { Global } from '@emotion/core';
// import styled from '@emotion/styled';
// import { CSSTransition, Transition, TransitionGroup } from 'react-transition-group';
import { PageTransition } from 'next-page-transitions';
// import { Transition } from 'react-spring/renderprops.cjs';
import Meta from '../components/layouts/meta';
import GlobalStyles from '../styles/global';

// const defaultStyles = {
//   transition: 'opacity 3000ms ease-in-out',
// opacity: 0,
//   position: absolute;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
// };

// const transitionStyles = {
//   entering: { opacity: 1 },
//   entered: { opacity: 0 },
//   exiting: { opacity: 0 },
//   exited: { opacity: 1 },
// };

// export const Animation = styled.div`
//   transition: 0.5s;
//   width: 300px;
//   height: 200px;
//   /* example for move item */
//   transform: translateX(${({ state }) => (state === 'entering' || state === 'entered' ? 400 : 0)}px);
//   /* change color*/
//   background: ${({ state }) => {
//     switch (state) {
//       case 'entering':
//         return 'red';
//       case 'entered':
//         return 'blue';
//       case 'exiting':
//         return 'green';
//       case 'exited':
//         return 'yellow';
//     }
//   }};
// `;

// const TransitionContainer = styled.div`
//   transition: opacity 3000ms ease-in-out;
//   /* opacity: 1; */

//   opacity: ${({ state }) => {
//     switch (state) {
//       case 'entering':
//         return 0;
//       case 'entered':
//         return 1;
//       case 'exiting':
//         return 0;
//       case 'exited':
//         return 0;
//       default:
//         return 0;
//     }
//   }};
//   `;

// const TransitionContainer = styled.div`
//   transition: opacity 3000ms ease-in-out;
//   /* opacity: 1; */

//   &.fuck-enter {
//     opacity: 0;
//   }

//   &.fuck-enter-active {
//     opacity: 1;
//     /* transition: opacity 3000ms; */
//   }

//   &.fuck-exit {
//     opacity: 1;
//   }

//   &.fuck-exit-active {
//     opacity: 0;
//     /* transition: opacity 3000ms; */
//   }
// `;

class CustomApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps({ Component, ctx }) {
  //   let pageProps = {}
  //
  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx)
  //   }
  //
  //   return { pageProps }
  // }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Meta {...Component.meta} />
        <Global styles={GlobalStyles} />
        <PageTransition timeout={300} classNames="page-transition">
          <Component {...pageProps} key={this.props.router.route} />
        </PageTransition>
        <style jsx global>
          {`
            .page-transition-enter {
              opacity: 0;
            }
            .page-transition-enter-active {
              opacity: 1;
              transition: opacity 300ms;
            }
            .page-transition-exit {
              opacity: 1;
            }
            .page-transition-exit-active {
              opacity: 0;
              transition: opacity 300ms;
            }
          `}
        </style>
        {/* <PageTransition timeout={300} classNames="page-transition"><Component {...pageProps} key={route} /></PageTransition> */}
        {/* <Component {...pageProps} /> */}
        {/* <Transition in timeout={500}>
          {(state) => (
            // state change: exited -> entering -> entered -> exiting -> exited
            <Animation state={state}>Hello</Animation>
          )}
        </Transition> */}
        {/* <Transition in timeout={3000} key={this.props.router.route}>
          {(state) => {
            console.log('state', state);
            return (
              <TransitionContainer state={state} key={this.props.router.route}>
                <Component {...pageProps} />
              </TransitionContainer>
            );
          }}
        </Transition> */}
        {/* <TransitionGroup>
          <CSSTransition timeout={3000} classNames="fuck" key={this.props.router.route}>
            <TransitionContainer className="shit">
              <Component {...pageProps} />
            </TransitionContainer>
          </CSSTransition>
        </TransitionGroup> */}
        {/* <style jsx global>
          {`
            .shit {
              transition: opacity 3000ms ease-in-out;
              opacity: 1;
            }

            .fuck-enter {
              opacity: 0;
            }

            .fuck-enter-active {
              opacity: 1;
            }

            .fuck-exit {
              opacity: 1;
            }

            .fuck-exit-active {
              opacity: 0;
            }
          `}
        </style> */}
        {/* <Transition items={this.props.router.route} from={{ opacity: 0 }} enter={{ opacity: 1 }} leave={{ opacity: 0 }}>
          {() => (style) => (
            <div style={style}>
              <Component {...pageProps} />
            </div>
          )}
        </Transition> */}
      </Container>
    );
  }
}

export default CustomApp;
