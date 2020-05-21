import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import auth0Client from "../services/auth0";
import { withRouter } from "next/router";
import Typed from "react-typed";

class Callback extends React.Component {

    async componentDidMount(){
        await auth0Client.handleAuthentication();
        this.props.router.push('/');
    }

  render() {
    return (
      <div>
        <BaseLayout {...this.props.auth}>
          <BasePage>
          <h1>
            <Typed
              loop
              typeSpeed={300}
              backSpeed={50}
              strings= {['Loading...','Please wait...']}
              smartBackspace
              loopCount={0}
              showCursor
              className="self-typed"
              cursorChar="|"
            />
            </h1>
          </BasePage>
        </BaseLayout>
      </div>
    );
  }
}

export default withRouter(Callback);
