import './App.css';
import React from "react";

import { Button, Container, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom'

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";


class Intro extends React.Component {

    render() {
        return (
        <>
        <ExamplesNavbar />
        <LandingPageHeader />
        <div className="main">
          <div className="section text-center">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <h2 className="title">What is Wine Smart?</h2>
                  <h5 className="description">
                    Wine Smart is an app for wine-junkies and newbies alike. Our 
                    website matches users to wines they would potentially 
                    like based on their responses to our quiz. Each recommendation
                    comes with a full description of the wine including food pairing 
                    suggestions, price, and where to purchase. What more could you ask for?
                  </h5>
                  <br />
                  <Link to="/quiz1">
                    <Button
                        className="btn-round"
                        color="info"
                        >
                        Take the discovery quiz
                    </Button>
                  </Link>
                </Col>
              </Row>
              <br />
              <br />
              <Row>
                <Col md="3">
                  <div className="info">
                    <div className="icon icon-info">
                      <i className="nc-icon nc-album-2" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">Ease</h4>
                      <p className="description">
                        Our algorithm is designed to match you to the perfect wine 
                        with just 10 short questions.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md="3">
                  <div className="info">
                    <div className="icon icon-info">
                      <i className="nc-icon nc-bulb-63" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">Efficieny</h4>
                      <p>
                        Don't spend hours researching wine online. 
                        We've already done all the work for you!
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md="3">
                  <div className="info">
                    <div className="icon icon-info">
                      <i className="nc-icon nc-chart-bar-32" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">Accuracy</h4>
                      <p>
                        We've worked extensively to ensure you'll 
                        be satisfied with your recommendations.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md="3">
                  <div className="info">
                    <div className="icon icon-info">
                      <i className="nc-icon nc-sun-fog-29" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">Convenience</h4>
                      <p>
                        Purchase and learn more about your recommendations 
                        right in our app!
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <DemoFooter />
      </>
        );
    }
}
 
export default Intro;
  