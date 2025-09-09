import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiAndroid,
  SiFigma,
  SiAdobephotoshop,
  SiGithub,
  SiJupyter,
  SiLinux
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Development Tools */}
      <Col xs={4} md={2} className="tech-icons"><SiVisualstudiocode title="VS Code" /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiJupyter title="Jupyter Notebook" /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPostman title="Postman" /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiGithub title="GitHub" /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiLinux title="Linux" /></Col>

      {/* Design Tools */}
      <Col xs={4} md={2} className="tech-icons"><SiFigma title="Figma" /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiAdobephotoshop title="Photoshop" /></Col>

      {/* Mobile Development */}
      <Col xs={4} md={2} className="tech-icons"><SiAndroid title="Android" /></Col>
    </Row>
  );
}

export default Toolstack;
