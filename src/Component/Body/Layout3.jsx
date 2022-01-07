import React from "react";
import PickService from "./pickService";
import "../../asset/mobileResponsive.css";
import "../../asset/body.css";
import { Container, Row, Col } from "react-bootstrap";

export default function Layout3() {
  return (
    <div>
      <Container className="layoutThree">
        <h2 className="more">Do more with MedOnCall</h2>
        <Row>
          <Col sm={7}>
            <div className="pickService">
              <PickService
                titleMe="Pick a service"
                descript="Choose a service to get professsional in specialized fields, whether General checkup, Emergency,Body and Nutrition,there is a consultant for it"
              />
              <PickService
                titleMe="Connect Virtually"
                descript="Whatever means of communication you prefer-vedio calling,
                audio calling or texting is adequate. keep it in mind
                that all information divulged will be treated confidentially."
              />
              <PickService
                titleMe="Need medications"
                descript="We provide an online pharmacy where you order precribed
                medication. for quality assurance purpose we source
                our products directly from the manufacturer."
              />
            </div>
          </Col>
          <Col sm={5}>
            <div>
              <div className="mobilePhone2"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
