/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";
import { Link as Link1} from 'react-router-dom'
import { Link as Link2} from 'react-scroll'

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" + require("assets/img/vineyard.jpg").default + ")",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>Wine Smart</h1>
            <h3> Answer a few questions and our AI assistant will recommend the wines you'll love.</h3>
            <br />
            <Link2  to="learn-more" spy={true} smooth={true}>
              <Button
                className="btn-round mr-4"
                color="neutral"
                outline
              >
                Learn More
              </Button>
            </Link2>
            <Link1 to="/quiz1">
              <Button className="btn-round" color="neutral" type="button" outline>
                Take the discovery quiz
              </Button>
            </Link1>
          </div>
        </Container>
      </div>
      <div id = "learn-more" style={{ float:"left", clear: "both" }}></div>
    </>
  );
}

export default LandingPageHeader;
