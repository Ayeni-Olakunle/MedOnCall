import React from "react";
import { useState, useEffect } from "react";
import LandingPage from "./Header/header";
import HoldBody from "./Body/HoldBody";
import Layout2 from "./Body/Layout2";
import Layout3 from "./Body/Layout3";
import Layout4 from "./Body/Layout4";
import Layout5 from "./Body/Layout5";
import GetsBetter from "./Body/getsBetter";
import Footer from "./Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";

export default function Landing() {
  // const [headerText, setHeaderText] = useState("");
  const [count, setCount] = useState(0);
  const listMe = [
    "Consult Healthcare professionals",
    "Purchase Prescribed Drugs",
    "All in one App",
  ];

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
      if (count === 2) {
        setCount(0);
      }
      console.log(count);
    }, 3000);
    // setHeaderText(listMe[count]);
  });
  return (
    <div>
      <Container fluid>
        <Container>
          <Row>
            <Col sm={12}>
              <LandingPage />
            </Col>
            <Col sm={12}>
              <HoldBody head={listMe[count]} />
            </Col>
          </Row>
        </Container>
        <Row>
          <Col sm={12}>
            <Layout2 />
          </Col>
          <Col sm={12}>
            <Layout3 />
          </Col>
          <Col sm={12}>
            <GetsBetter />
          </Col>
        </Row>
        <Layout4 />
        <Layout5 />
        <Footer />
      </Container>
    </div>
  );
}
