import React from "react";
import "../../asset/Footer.css";
import "../../asset/mobileResponsive.css";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <Container fluid style={{ padding: 0 }}>
      <Row className="footerRow">
        {/* <div className="footerRow"> */}
        <Col sm={6}>
          <div style={{ width: "fit-content" }}>
            <div className="holdMedCall">
              <a href="http://" class="comName">
                MedonCall
              </a>
              <div class="holdSmallCircle">
                <div class="smallCircle"></div>
                <div class="smallCircle"></div>
                <div class="smallCircle"></div>
              </div>
            </div>
            <div>
              <p className="FooterMedCallText">
                Address: Lorem ipsum dolor sit amet,
                <br />
                consectetur adipiscing elit.
                <br />
                Non arcu condimentum sed id tempus
                <br />
                magnis amet, sagittis semper.
                <br />
                Email Address:info@medoncall.com
              </p>
            </div>
          </div>
        </Col>
        <Col sm={6}>
          <Container fluid style={{ padding: 0 }} className="sed">
            <Row>
              <Col sm={3} className="holdSmallCol">
                <ul>
                  <h4 className="footerHeader">COMPANY</h4>
                  <li className="listNow">Pricing</li>
                  <li className="listNow">About us</li>
                  <li className="listNow">Privacy Policy</li>
                  <li className="listNow">Terms of Use</li>
                </ul>
              </Col>
              <Col sm={4} className="holdSmallCol">
                <ul>
                  <h4 className="footerHeader">FEATURES</h4>
                  <li className="listNow">Drug Store</li>
                  <li className="listNow">Book Consultation</li>
                </ul>
              </Col>
              <Col sm={5} className="holdSmallCol">
                <ul>
                  <h4 className="footerHeader">HELP</h4>
                  <li className="listNow">Frequently Asked Questions</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col sm={4}>
          <div>
            <p className="footTextMe">
              (c)Copy 2021 | All Rights Reserved | Medoncall
            </p>
          </div>
        </Col>
        <Col sm={4} style={{ textAlign: "center" }}>
          <div>
            <p className="footTextMe">
              Made with ❤️ by{" "}
              <span className="redMe">Apptide Technologies</span>
            </p>
          </div>
        </Col>
        <Col sm={4} style={{ textAlign: "right" }}>
          <FaFacebookSquare className="footerIcon" />
          <FaTwitter className="footerIcon" />
          <FaInstagram className="footerIcon" />
        </Col>
        {/* </div> */}
      </Row>
    </Container>
  );
}
