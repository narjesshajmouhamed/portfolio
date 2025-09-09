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
  const tools = [
    { icon: <SiVisualstudiocode size={50} />, name: "VS Code" },
    { icon: <SiJupyter size={50} />, name: "Jupyter Notebook" },
    { icon: <SiPostman size={50} />, name: "Postman" },
    { icon: <SiGithub size={50} />, name: "GitHub" },
    { icon: <SiLinux size={50} />, name: "Linux" },
    { icon: <SiFigma size={50} />, name: "Figma" },
    { icon: <SiAdobephotoshop size={50} />, name: "Photoshop" },
    { icon: <SiAndroid size={50} />, name: "Android" },

  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons text-center mb-4" key={index}>
          {tool.icon}
          <p style={{ marginTop: "8px", fontSize: "0.9rem", color: "white" }}>
            {tool.name}
          </p>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
