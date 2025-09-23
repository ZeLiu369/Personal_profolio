import React from "react";
import { Container } from "react-bootstrap";

const experiences = [
    {
        company: "QCA Systems",
        position: "Software Developer",
        duration: "Sept. 2024 - Dec 2024",
        companyLink: "https://qcasystems.com/",
        description: "Participated in software development, data collection, and other engineering-related tasks."
    },
    // {
    //     company: "BAYS Tech",
    //     position: "Software Engineer",
    //     duration: "Aug. 2024 - Sept. 2024 (part-time)",
    //     companyLink: "https://www.baystech.net/",
    //     description: "Contributed to the AI-powered smart smoke detector product."
    // },
    {
        company: "SiftMed Inc.",
        position: "Software Engineer",
        duration: "Sept. 2021 - Sept. 2022",
        companyLink: "https://siftmed.ca",
        description: "Engaged in the development and design of a web-based AI document platform."
    }
];

const Experience = () =>
{
    return (
        <section className="experience-section" id="experience">
            <div className="main-container">
                <h2 className="text-center">Experience</h2>
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
                            <div className="timeline-content">
                                <h3>
                                    {exp.position} @{" "}
                                    <a href={exp.companyLink} target="_blank" rel="noopener noreferrer" className="company-link">
                                        {exp.company}
                                    </a>
                                </h3>
                                <span className="timeline-date">{exp.duration}</span>
                                <p>{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
