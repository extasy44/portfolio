import React from 'react';
import BaseLayout from '../../components/layouts/BaseLayout';
import axios from 'axios';

import { withRouter } from 'next/router';

class Portfolio extends React.Component {

  static async getInitialProps({query}) {
    let post = {};
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
      post = res.data;
    } catch (error) {
      console.log(error);
    }
    return { portfolio: post };
  }

  renderPost({id, title, body}) {
      return (
        <div>
            <h1>{title}</h1>
            <p>Body: {body}</p>
            <p>ID: {id}</p>
        </div>  
      );
  }
  render() {
    const { portfolio } = this.props;
    return (
      <BaseLayout>
        <h2>{this.renderPost(portfolio)}</h2>
      </BaseLayout>
    );
  }
}

export default withRouter(Portfolio);