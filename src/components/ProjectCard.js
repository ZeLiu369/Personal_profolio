import { Col } from "react-bootstrap";

export const ProjectCard = ({ title = "Untitled", description = "No description available", img = "www.example.com", link = "#", techStack = "Unknown" }) =>
{
    return (
        <Col size={12} sm={6} md={4}>
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
                <div className="proj-imgbx">
                    <img src={img} />
                    <div className="proj-txtx">
                        <h5>{title}</h5>
                        <span>{description}</span>
                        <span className="tech-stack"><br />{techStack}</span>
                    </div>
                </div>
            </a>
        </Col>
    )
}
