import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

class CV extends React.Component {
  render() {
    return (
      <div>
        <BaseLayout>
          <BasePage>
            <h1>I am CV Page</h1>
          </BasePage>
        </BaseLayout>
      </div>
    );
  }
}

export default CV;
