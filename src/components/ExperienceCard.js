import React from "react";
import { Card } from "react-bootstrap";

const ExperienceCard = ({ company, position, duration, description }) =>
{
    return (
        <Card className="experience-card">
            <Card.Body>
                <Card.Title>{position} @ {company}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{duration}</Card.Subtitle>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ExperienceCard;
