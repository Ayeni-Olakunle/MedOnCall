import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GiMedicines, GiMedicinePills } from "react-icons/gi";

export default function Layout4() {
  return (
    <Container fluid style={{ padding: 0 }}>
      <Row style={{ padding: 0 }}>
        <Col sm={12} style={{ padding: 0 }}>
          <div>
            <div>
              <div className="clipPath"></div>
            </div>
            <div className="readMore">
              <p>
                Pharmacy?You have it on
                <br />
                the same app?
              </p>
              <button className="readMoreButin">Read More</button>
            </div>
          </div>
        </Col>
        <Row className="rowMe">
          <Col sm={3}></Col>
          <Col sm={4} className="holdMedicineProOne">
            <div className="holdDrug">
              <div className="holdMedicinePro">
                <div className="holdMedicine">
                  <GiMedicines className="medicine" />
                </div>
              </div>
              <div>
                <h2 className="buyMe">Buy over the counter</h2>
              </div>
              <div>
                <p className="buyText">
                  Buy regular medicine you'd get from the pharmacist without
                  necessary prescriptions
                </p>
              </div>
            </div>
          </Col>
          <Col sm={4} className="holdMedicineProOne">
            <div className="holdDrug">
              <div className="holdMedicinePro">
                <div className="holdMedicine">
                  <GiMedicinePills className="medicine" />
                </div>
              </div>
              <div>
                <h2 className="buyMe">Buy Prescription Drugs</h2>
              </div>
              <div>
                <p className="buyText">
                  Get medicine precribed by your personal doctor or pharmacist
                  on Medoncall or anywhere else
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}
