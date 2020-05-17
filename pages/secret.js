import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

class Secret extends React.Component {

    renderSecretPage() {
            const { isAuthenticated } = this.props.auth;

            if (isAuthenticated) {
              return (
                <div>
                  <BaseLayout {...this.props.auth}>
                    <BasePage>
                      <h1>I am Secret Page</h1>
                      <p>Secret Contents here..</p>
                    </BasePage>
                  </BaseLayout>
                </div>
              );
            } else {
              return (
                <div>
                  <BaseLayout {...this.props.auth}>
                    <BasePage>
                      <h1>You are not authenticated</h1>
                    </BasePage>
                  </BaseLayout>
                </div>
              );
            }
    }

  render() {
    return this.renderSecretPage();
  }
}

export default Secret;
