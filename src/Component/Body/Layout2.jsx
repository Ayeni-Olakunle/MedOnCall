import React from "react";
import "../../asset/body.css";
import "../../asset/mobileResponsive.css";
import { Container, Row, Col } from "react-bootstrap";
import { MdPermPhoneMsg, MdOutlineSpeed, MdLocationOn } from "react-icons/md";

export default function Layout2() {
  return (
    <div>
      <div className="videoIcone3">
        <MdPermPhoneMsg />
      </div>
      <Container fluid className="HoldMeA">
        <Row>
          <Col sm={6}>
            <div>
              <div className="holdBigBox">
                <div className="BigBox"></div>
              </div>
              <div className="smallBox"></div>
            </div>
          </Col>
          <Col sm={6}>
            <div className="secondContin">
              <div className="theirLayout">
                <div className="speed">
                  <MdOutlineSpeed />
                </div>
                <h3 className="thousand">
                  Thousands of specialists at your disposal
                </h3>
                <div className="des">
                  At Medoncall, we ensure that the best of practitioners attend
                  to your request providing the highest quality of medical
                  services for a quick and seamless recovery.
                </div>
              </div>
            </div>
          </Col>

          <Col sm={6}>
            <div>
              <div>
                <div className="mobilePhone"></div>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <div className="secondContin2">
              <div className="theirLayout">
                <div className="speed">
                  <MdOutlineSpeed />
                </div>
                <h3 className="thousand">
                  Thousands of specialists at your disposal
                </h3>
                <div className="des">
                  At Medoncall, we ensure that the best of practitioners attend
                  to your request providing the highest quality of medical
                  services for a quick and seamless recovery.
                </div>
              </div>
            </div>

            <div className="secondContin2">
              <div className="theirLayout">
                <div className="speed">
                  <MdLocationOn />
                </div>
                <h3 className="thousand">Scheduled Home Visits</h3>
                <div className="des">
                  Even if you require physical attention, we will still come to
                  you ensuring optimum convenience as promised.
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
