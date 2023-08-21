import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BasicCard from "../Cards/Cards.js";
import ProjectCard from "../Cards/Cards.js";
import Projects from "../Projects/Projects.js";

const Portfolio = () => {
    return (
      <Container>
      <Row>
        {Projects.map((project, index) => (
          <div key={index} className="col-md-4">
            <ProjectCard {...project} />
          </div>
        ))}
      </Row>
    </Container>
  );
  };

export default Portfolio;