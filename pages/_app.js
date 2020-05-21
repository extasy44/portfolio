import React from "react";
import App, { Container } from 'next/app';

import auth0 from '../services/auth0';

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';


class MyApp extends App {
  
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    
    const user = process.browser
      ? await auth0.clientAuth()
      : await auth0.serverAuth(ctx.req);
 
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    const auth = { isAuthenticated: user, user: !!user };

    return { pageProps, auth };
  }

  render() {
    const { Component, pageProps, auth } = this.props;

    return (

        <Component {...pageProps} auth={ auth } />

    );
  }
}

export default MyApp;