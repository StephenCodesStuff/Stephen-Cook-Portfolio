import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProjectCard = ({ title, description, imageUrl, projectUrl }) => {
    return (
      <Card style={{ width: '18rem', margin: '20px' }}>
        <Card.Img 
        variant="top" 
        src={imageUrl}
        alt={title}
        style={{ width: '100%', height: '200px' }} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <a href={projectUrl} className="btn btn-primary">
            View Project
          </a>
        </Card.Body>
      </Card>
    );
  };

export default ProjectCard;