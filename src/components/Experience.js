import React from "react";
import { FaBriefcase, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const experiences = [
    {
        company: "QCA Systems",
        position: "Software Developer",
        duration: "Sept. 2024 - Dec 2024",
        location: "Remote",
        companyLink: "https://qcasystems.com/",
        description: "Participated in software development, data collection, and other engineering-related tasks.",
        highlights: [
            "Developed scalable software solutions",
            "Implemented data collection systems",
            "Collaborated with cross-functional teams"
        ]
    },
    {
        company: "SiftMed Inc.",
        position: "Software Engineer",
        duration: "Sept. 2021 - Sept. 2022",
        location: "St. John's, NL",
        companyLink: "https://siftmed.ca",
        description: "Engaged in the development and design of a web-based AI document platform.",
        highlights: [
            "Built web-based AI document platform",
            "Designed user-friendly interfaces",
            "Optimized system performance"
        ]
    }
];

const Experience = () =>
{
    return (
        <section className="experience-section" id="experience">
            <div className="main-container">
                <h2>Professional Experience</h2>
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
                            <div className="timeline-content group">
                                <div className="timeline-date">
                                    <FaClock className="inline mr-2" />
                                    {exp.duration}
                                </div>

                                <h3 className="flex items-center">
                                    <FaBriefcase className="mr-3 text-primary" />
                                    {exp.position}
                                </h3>

                                <h4>
                                    <a href={exp.companyLink} target="_blank" rel="noopener noreferrer" className="company-link">
                                        {exp.company}
                                    </a>
                                    {exp.location && (
                                        <span className="ml-3 text-sm text-gray-400">
                                            <FaMapMarkerAlt className="inline mr-1" />
                                            {exp.location}
                                        </span>
                                    )}
                                </h4>

                                <p className="mb-4">{exp.description}</p>

                                {exp.highlights && (
                                    <ul className="list-none space-y-2 mt-4">
                                        {exp.highlights.map((highlight, idx) => (
                                            <li key={idx} className="flex items-start text-sm text-gray-300">
                                                <span className="w-2 h-2 bg-gradient-to-r from-primary to-primary-dark rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
