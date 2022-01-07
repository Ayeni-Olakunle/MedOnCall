import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Layout5() {
  return (
    <Container fluid style={{ padding: 0 }}>
      <Row style={{ padding: 0 }}>
        <Col sm={12}>
          <h1 className="stayAhead">
            Stay ahead with the latest
            <br />
            Health News
          </h1>
          <div>
            <div className="holdClipPathe">
              <div className="holdClipOne">
                <div className="clipOne">kbhbh</div>
              </div>
              <div className="holdClipOne">
                <div className="clipTwo"></div>
              </div>
              <div className="holdClipOne">
                <div className="clipThree"></div>
              </div>
              <div className="holdClipOne">
                <div className="clipFour"></div>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={12} style={{ padding: 0 }}>
          <div className="wer">
            <div className="clipPath2"></div>
            <div className="holdStore">
              <h1 className="storeHead">Get it on App Store</h1>
              <div className="holdAppleNPlay2">
                <div className="holdAppleNPlay">
                  <div className="playStore"></div>
                  <div className="appleStore"></div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
