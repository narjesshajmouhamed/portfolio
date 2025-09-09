import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "./Particle";

function Education() {
  const educationData = [
    {
      school: "Higher School of Communication (Sup’Com), Tunis",
      degree: "Engineering studies in ICT",
      period: "2023–2026",
    },
    {
      school: "Higher School of Sciences and Technologies, Hammam Sousse",
      degree: "Preparatory classes in Mathematics and Physics",
      extra: "Rank: 171/1831",
      period: "2021–2022",
    },
    {
      school: "Sidi Alouane Secondary School",
      degree: "Mathematics Baccalaureate",
      period: "2020–2021",
    },
  ];

  const cardStyle = {
    backgroundColor: "#2c2c3e",
    color: "white",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
    minHeight: "280px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const handleHover = (e, hover) => {
    e.currentTarget.style.transform = hover ? "scale(1.03)" : "scale(1)";
    e.currentTarget.style.boxShadow = hover
      ? "0 8px 25px rgba(0,0,0,0.5)"
      : "0 4px 15px rgba(0,0,0,0.3)";
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Education</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here is a summary of my academic background.
        </p>
        <Row style={{ justifyContent: "center", gap: "20px", paddingBottom: "50px" }}>
          {educationData.map((edu, index) => (
            <Col md={4} key={index}>
              <Card
                style={cardStyle}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
              >
                <Card.Body>
                  <Card.Title style={{ color: "#9f7aea", fontSize: "1.5em" }}>
                    {edu.school}
                  </Card.Title>
                  <Card.Text style={{ marginTop: "10px", lineHeight: "1.5" }}>
                    <strong>Degree:</strong> {edu.degree} <br />
                    {edu.extra && (
                      <>
                        <strong>Extra:</strong> {edu.extra} <br />
                      </>
                    )}
                    <strong>Period:</strong> {edu.period}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Education;
