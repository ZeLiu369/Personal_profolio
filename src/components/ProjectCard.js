
export const ProjectCard = ({ title = "Untitled", description = "No description available", img = "www.example.com", link = "#", techStack = "Unknown" }) =>
{
    return (
        <div className="project-card">
            <div className="proj-imgbx">
                <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
                    <img src={img} alt={title} />
                </a>
            </div>
            <div className="project-info">
                <h5 className="project-title">{title}</h5>
                <p className="project-description">{description}</p>
                <div className="project-tech-stack">{techStack}</div>
                <a href={link} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                    View Project
                </a>
            </div>
        </div>
    )
}
