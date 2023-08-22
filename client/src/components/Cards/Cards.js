import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ProjectCard.css'; // Import the CSS file

const ProjectCard = ({ title, description, imageUrl, projectUrl }) => {
  return (
    <Card>
      <Card.Img 
        className="card-img"
        variant="top" 
        src={imageUrl}
        alt={title}
      />
      <Card.Body>
        <Card.Title className="card-title">{title}</Card.Title>
        <Card.Text className="card-text">{description}</Card.Text>
        <a href={projectUrl} className="btn btn-primary">
          View Project
        </a>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;