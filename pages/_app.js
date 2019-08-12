/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import App, { Container } from 'next/app';
import { Global } from '@emotion/core';
import Meta from '../components/layouts/meta';
import GlobalStyles from '../styles/global';

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
        {/* <PageTransition timeout={300} classNames="page-transition"><Component {...pageProps} key={router.route} /></PageTransition> */}
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default CustomApp;
