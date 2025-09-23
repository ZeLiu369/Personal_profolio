import React from "react";
import { Container } from "react-bootstrap";

const education = [
    {
        school: "Simon Fraser University",
        degree: "Master in Smart Manufacturing Engineering",
        duration: "Sept. 2022 - Dec. 2024",
        description: "AI, IoT, digital twins, and robotics drive innovation in manufacturing, enhancing processes with 3D printing, machine learning, big data analytics, and next-gen technologies.",
        link: "https://www.sfu.ca/fas/study/future-graduates/programs/master-engineering-mse.html"
    },
    {
        school: "Memorial University",
        degree: "BSc. Computer Science with Honours",
        duration: "Sept. 2018 - Aug. 2022",
        description: "Focused on full-stack development, algorithms, and system design. Led multiple hackathon teams and built scalable applications.",
        link: "https://www.mun.ca/computerscience/undergraduates/programs/honours-program/#:~:text=The%20Honours%20Program%20in%20Computer,during%20their%20final%20two%20semesters."
    },
    {
        school: "College of the North Atantic",
        degree: "Computing Systems Engineering",
        duration: "Sept. 2017 - Aug. 2018 (transfered to University)",
        description: "Relvant courses: Data Structures & Algorithms, Object-Oriented Programming, Network, Digital Systems, POSIX Operating Systems, Software Engineering, Database... ",
        link: "https://www.cna.nl.ca/program/computing-systems-engineering-technology-co-op"
    }
];

const Education = () =>
{
    return (
        <section className="education-section" id="education">
            <div className="main-container">
                <h2>Education</h2>
                <div className="timeline">
                    {education.map((edu, index) => (
                        <div key={index} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
                            <div className="timeline-content">
                                <h3>
                                    {edu.school}
                                </h3>
                                <span className="timeline-date">{edu.duration}</span>
                                <h4>
                                    <a href={edu.link} target="_blank" rel="noopener noreferrer" className="school-link">
                                        {edu.degree}
                                    </a>
                                </h4>
                                <p>{edu.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
