import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiNodejs, DiPython, DiGit, DiHtml5, DiCss3 } from "react-icons/di";
import { SiFlutter, SiFirebase, SiTensorflow, SiNextdotjs, SiMongodb, SiMysql, SiPostgresql, SiGithub } from "react-icons/si";

function Techstack() {
  const skills = [
    { icon: <span style={{ fontWeight: "bold", fontSize: "2rem" }}>C</span>, name: "C" },
    { icon: <CgCPlusPlus size={50} />, name: "C++" },
    { icon: <DiJavascript1 size={50} />, name: "JavaScript" },
    { icon: <DiPython size={50} />, name: "Python" },
    { icon: <DiHtml5 size={50} />, name: "HTML5" },
    { icon: <DiCss3 size={50} />, name: "CSS3" },
    { icon: <DiReact size={50} />, name: "React" },
    { icon: <DiNodejs size={50} />, name: "Node.js" },
    { icon: <SiFlutter size={50} />, name: "Flutter" },
    { icon: <SiFirebase size={50} />, name: "Firebase" },
    { icon: <SiTensorflow size={50} />, name: "TensorFlow / AI" },
    
    { icon: <SiMongodb size={50} />, name: "MongoDB" },
    { icon: <SiMysql size={50} />, name: "MySQL" },
    { icon: <SiPostgresql size={50} />, name: "PostgreSQL" },

   
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill, index) => (
        <Col xs={4} md={2} className="tech-icons text-center mb-4" key={index}>
          {skill.icon}
          <p style={{ marginTop: "8px", fontSize: "0.9rem", color: "white" }}>{skill.name}</p>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
