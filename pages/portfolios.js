import React from "react";
import Link  from "next/link";

import axios from "axios";

import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

class Portfolios extends React.Component {

  static async getInitialProps(){
    let posts=[];
    try{
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      posts = res.data;
    }catch(e){
      console.log(e);
    }

    return { posts: posts.slice(0, 10)};
  }

    renderPosts(posts){
        if(!posts){ return <div>Loading...</div>}
        return posts.map((post) => (
          <li key={post.id} style={{ fontSize: "20px" }}>
            <Link routes={`/portfolios/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ));
    }
    
    render() {
        const { posts } = this.props;

        return (
          <div>
            <BaseLayout>
              <BasePage>
                <h1>Portfolios Page</h1>
                <ul>{this.renderPosts(posts)}</ul>
              </BasePage>
            </BaseLayout>
          </div>
        );
    }
}

export default Portfolios;