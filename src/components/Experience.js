import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./Projects/ProjectCards";// tu peux réutiliser le même composant

import Particle from "./Particle";
import telecomImg from "../Assets/telecom.png";
import bintecomImg from "../Assets/binetcom.png";

function Experience() {
  const experiences = [
    {
      imgPath: telecomImg, // tu peux mettre un logo ou icône d'entreprise
      title: "Summer Internship at Tunisie Telecom",
      description: (
        <>
          <strong>Period : </strong> July 2024 <br />

          <strong>Role :</strong> Intern <br />
          <strong>Details :</strong>
          <ul>
            <li>Hands-on experience with network architecture.</li>
            <li>Participated in the installation and configuration of telecommunication systems.</li>
            <li>Collaborated with the technical team to ensure deployment and maintenance of network infrastructure.</li>
          </ul>
        </>
      ),
    },
    {
      imgPath: bintecomImg, // logo ou icône Bintecom
      title: "Summer Internship at Bintecom",
      description: (
        <>
          <strong>Period :</strong> July-August 2024 <br />
          <strong>Role :</strong> Intern <br />
          <strong>Details :</strong>
          <ul>
            <li>Assisted in web development and software solutions for clients.</li>
            <li>Collaborated with the technical team on implementing and testing new features.</li>
            <li>Gained experience in project management and client communication.</li>
          </ul>
        </>
      ),
    },
  ];

  const cardStyle = {
    minHeight: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Professional Experience</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here is a summary of my professional experience in internships and projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {experiences.map((exp, index) => (
            <Col md={4} className="project-card" style={cardStyle} key={index}>
              <ProjectCards
                imgPath={exp.imgPath || "https://via.placeholder.com/400x200?text=Experience"} 
                isBlog={false}
                title={exp.title}
                description={exp.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
