import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Narjess Haj Mouhamed</span>,
            from <span className="purple">Tunisia</span>.<br />
            I am currently a ICT Engineering student at Sup’Com with a deep passion for web & mobile development, UI/UX design, Artificial Intelligence (AI), and the Internet of Things (IoT).<br />
            I enjoy designing and developing innovative projects that combine smart technologies with user-friendly interfaces. I am particularly interested in AI-driven solutions, IoT applications, and energy optimization systems.<br />
            I also like to explore emerging technologies, learn new programming languages, and challenge myself with complex problems.
          </p>

          <p>Some of my hobbies and personal activities include:</p>
          <ul>
            
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading and self-learning
            </li>
            <li className="about-activity">
              <ImPointRight /> Music and creative arts
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Narjess Haj Mouhamed</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
