import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/narjess.jpg"; // Remplace par ton avatar si tu as
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi everyone! I am <span className="purple">Narjess Haj Mouhamed</span> from <span className="purple">Tunisia</span>.
              <br />
              <br />
              I am a <b className="purple">3rd Year Engineering Student</b> at <b className="purple">Sup'Com</b>, specializing in <b className="purple">ICT</b>.
              <br />
              <br />
              I am passionate about <i><b className="purple">AI, IoT, Web & Mobile Development</b></i>, and I enjoy learning and applying new technologies in real projects.
              <br />
              <br />
              Whenever possible, I also explore building products using <b className="purple">Node.js</b> and modern JavaScript frameworks like <i><b className="purple">React.js and Next.js</b></i>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/narjesshajmouhamed"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/narjess-haj-mouhamed-392470292/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/narjesshadjmed/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
