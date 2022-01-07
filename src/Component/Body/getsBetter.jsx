import React from "react";
import "../../asset/mobileResponsive.css";
import "../../asset/body.css";
import { Container, Row, Col } from "react-bootstrap";

export default function GetsBetter() {
  return (
    <div>
      <Container>
        <Row>
          <h1 className="getBetteeHead">It only gets better...</h1>
          <Col sm={12}>
            <div className="holdFlexible">
              <div className="flexible">
                <h3 className="flexTextH">Flexible Health Plan</h3>
                <div>
                  <p>
                    we work within your budget offering you a variety of
                    packages for you,your family and employees with the best of
                    services included
                  </p>
                </div>
              </div>

              <div className="flexible">
                <h3 className="flexTextH">Covid compliant practices</h3>
                <div>
                  <p className="flexText">
                    Concerned about covid,be rest assured; our doctorsare highly
                    experienced to administer treatment, taking into all the
                    required preventive measures when visiting our home.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={12}>
            <div className="holdThreeIm">
              <div className="imageOne"></div>
              <div className="imageTwo"></div>
              <div className="imageThree"></div>
            </div>
            <div className="holdLearn">
              <button className="learn">Learn more about this</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
