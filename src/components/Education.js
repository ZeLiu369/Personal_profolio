import React from "react";
import { FaGraduationCap, FaMapMarkerAlt, FaClock, FaAward, FaCode } from "react-icons/fa";

const education = [
    {
        school: "Simon Fraser University",
        degree: "Master in Smart Manufacturing Engineering",
        level: "Graduate",
        duration: "Sept. 2022 - Dec. 2024",
        location: "Burnaby, BC",
        description: "AI, IoT, digital twins, and robotics drive innovation in manufacturing, enhancing processes with 3D printing, machine learning, big data analytics, and next-gen technologies.",
        link: "https://www.sfu.ca/fas/study/future-graduates/programs/master-engineering-mse.html",
        highlights: [
            "Advanced AI and Machine Learning applications",
            "IoT and Digital Twin technologies",
            "Robotics and Automation systems",
            "3D Printing and Additive Manufacturing"
        ]
    },
    {
        school: "Memorial University",
        degree: "BSc. Computer Science with Honours",
        level: "Undergraduate",
        duration: "Sept. 2018 - Aug. 2022",
        location: "St. John's, NL",
        description: "Focused on full-stack development, algorithms, and system design. Led multiple hackathon teams and built scalable applications.",
        link: "https://www.mun.ca/computerscience/undergraduates/programs/honours-program/",
        highlights: [
            "Full-stack development expertise",
            "Advanced algorithms and data structures",
            "System design and architecture",
            "Hackathon team leadership"
        ]
    },
    {
        school: "College of the North Atlantic",
        degree: "Computing Systems Engineering",
        level: "Diploma",
        duration: "Sept. 2017 - Aug. 2018",
        location: "St. John's, NL",
        description: "Comprehensive foundation in computing systems, programming, and engineering principles. Transferred to university to pursue advanced computer science studies.",
        link: "https://www.cna.nl.ca/program/computing-systems-engineering-technology-co-op",
        highlights: [
            "Data Structures & Algorithms",
            "Object-Oriented Programming",
            "Network Systems and Security",
            "Database Design and Management"
        ]
    }
];

const Education = () =>
{
    const getLevelIcon = (level) =>
    {
        switch (level)
        {
            case 'Graduate':
                return <FaAward className="text-yellow-400" />;
            case 'Undergraduate':
                return <FaGraduationCap className="text-blue-400" />;
            case 'Diploma':
                return <FaCode className="text-green-400" />;
            default:
                return <FaGraduationCap className="text-primary" />;
        }
    };

    return (
        <section className="education-section" id="education">
            <div className="main-container">
                <h2>Academic Journey</h2>
                <div className="timeline">
                    {education.map((edu, index) => (
                        <div key={index} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
                            <div className="timeline-content group">
                                <div className="timeline-date">
                                    <FaClock className="inline mr-2" />
                                    {edu.duration}
                                </div>

                                <h3 className="flex items-center">
                                    {getLevelIcon(edu.level)}
                                    <span className="ml-3">{edu.school}</span>
                                </h3>

                                <h4>
                                    <a href={edu.link} target="_blank" rel="noopener noreferrer" className="school-link">
                                        {edu.degree}
                                    </a>
                                    {edu.location && (
                                        <span className="ml-3 text-sm text-gray-400">
                                            <FaMapMarkerAlt className="inline mr-1" />
                                            {edu.location}
                                        </span>
                                    )}
                                </h4>

                                <p className="mb-4">{edu.description}</p>

                                {edu.highlights && (
                                    <div className="mt-4">
                                        <h5 className="text-sm font-semibold text-primary-300 mb-2">Key Areas:</h5>
                                        <ul className="list-none space-y-2">
                                            {edu.highlights.map((highlight, idx) => (
                                                <li key={idx} className="flex items-start text-sm text-gray-300">
                                                    <span className="w-2 h-2 bg-gradient-to-r from-primary to-primary-dark rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
