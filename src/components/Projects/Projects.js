import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Images pour tes projets
import sahhaMapImg from "../../Assets/Projects/sahha_map.png";
import ameTunisieImg from "../../Assets/Projects/ame_tunisie.png";
import energyImg from "../../Assets/Projects/energy.jpg";
import galleryImg from "../../Assets/Projects/gallery.png";

function Projects() {
  const projectStyle = { 
    minHeight: "400px", 
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "space-between" 
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some projects I've worked on recently. Each project demonstrates my skills in different technologies and tools.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* Sahha Map */}
          <Col md={4} className="project-card" style={projectStyle}>
            <ProjectCard
              imgPath={sahhaMapImg}
              isBlog={false}
              title="Sahha Map – Mobile Application"
              description={
                <>
                  <strong>Technologies:</strong> Flutter, Firebase <br />
                  <strong>Role:</strong> Mobile Developer <br />
                  <strong>Details:</strong> Developed a mobile app to help users find healthcare services in Tunisia. Worked on UI, real-time data integration with Firebase, and user authentication.
                </>
              }
              ghLink="https://github.com/Saifgharbii/Healthcare-Provider-Locator-App"
              demoLink="https://www.linkedin.com/posts/narjess-haj-mouhamed-392470292_flutter-healthcaretech-innovation-activity-7319069930367188992-3Pph"
            />
          </Col>

          {/* L'âme de Tunisie */}
          <Col md={4} className="project-card" style={projectStyle}>
            <ProjectCard
              imgPath={ameTunisieImg}
              isBlog={false}
              title="L’âme de Tunisie – Website"
              description={
                <>
                  <strong>Technologies:</strong> React, Next.js, Express <br />
                  <strong>Role:</strong> Frontend & Backend Developer <br />
                  <strong>Details:</strong> Created a website to promote Tunisia's beauty. Implemented responsive UI, server-side rendering with Next.js, and backend API with Express.
                </>
              }
              demoLink="https://www.linkedin.com/posts/narjess-haj-mouhamed-392470292_webdevelopment-react-nodejs-activity-7284283639008264193-2hrM"
            />
          </Col>

          {/* Energy Project */}
          <Col md={4} className="project-card" style={projectStyle}>
            <ProjectCard
              imgPath={energyImg}
              isBlog={false}
              title="Data Simulation & Augmentation for Optimized Household Load Management"
              description={
                <>
                  <strong>Technologies:</strong> Python, TensorFlow, GANs <br />
                  <strong>Role:</strong> AI Developer <br />
                  <strong>Details:</strong> Synthesized and disaggregated household energy consumption data using a multi-appliance GAN model to optimize load management.
                </>
              }
              demoLink="https://www.linkedin.com/posts/narjess-haj-mouhamed-392470292_p2m-activity-7334228146126282752-ip-P"
            />
          </Col>

          {/* Online Gallery Website */}
          <Col md={4} className="project-card" style={projectStyle}>
            <ProjectCard
              imgPath={galleryImg}
              isBlog={false}
              title="Online Gallery Website"
              description={
                <>
                  <strong>Technologies:</strong> HTML, CSS, PHP <br />
                  <strong>Role:</strong> Web Developer <br />
                  <strong>Details:</strong> Developed an online gallery to showcase artworks. Implemented dynamic gallery pages using PHP and styled the website with CSS for responsive design.
                </>
              }
              demoLink="https://www.linkedin.com/posts/narjess-haj-mouhamed-392470292_webdevelopment-html-css-activity-7165380243405402113-_RMG"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
