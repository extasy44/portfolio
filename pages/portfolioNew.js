import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import PortfolioCreateForm from "../components/portfolios/PortfolioCreateForm";

import { Row, Col } from 'reactstrap';

import withAuth from "../components/hoc/withAuth";

class PortfolioNew extends React.Component {
  render() {
    return (
      <div>
        <BaseLayout {...this.props.auth}>
          <BasePage
            className="portfolio-create-page"
            title="Create New Portfolio"
          >
            <Row>
              <Col md="6">
                <PortfolioCreateForm />
              </Col>
            </Row>
          </BasePage>
        </BaseLayout>
      </div>
    );
  }
}

export default withAuth('siteOwner')(PortfolioNew);
