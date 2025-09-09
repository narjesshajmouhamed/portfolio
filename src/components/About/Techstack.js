import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiNodejs, DiPython, DiGit, DiHtml5, DiCss3 } from "react-icons/di";
import { SiFlutter, SiFirebase, SiTensorflow, SiNextdotjs, SiMongodb, SiMysql, SiPostgresql, SiGithub } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Languages */}
      <Col xs={4} md={2} className="tech-icons">C</Col> {/* Texte simple pour C */}
      <Col xs={4} md={2} className="tech-icons"><CgCPlusPlus title="C++" /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiJavascript1 title="JavaScript" /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiPython title="Python" /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiHtml5 title="HTML5" /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiCss3 title="CSS3" /></Col>

      {/* Frameworks / Libraries */}
      <Col xs={4} md={2} className="tech-icons"><DiReact title="React" /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiNodejs title="Node.js" /></Col>

      <Col xs={4} md={2} className="tech-icons"><SiFlutter title="Flutter" /></Col>

      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons"><SiPostgresql title="PostgreSQL" /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiMysql title="MySQL" /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiMongodb title="MongoDB" /></Col>

      {/* Tools & AI */}

      
      <Col xs={4} md={2} className="tech-icons"><SiFirebase title="Firebase" /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTensorflow title="TensorFlow / AI" /></Col>
    </Row>
  );
}

export default Techstack;
