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
        <section className="py-20 bg-gradient-to-br from-dark via-dark-lighter to-dark relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/5 before:to-primary-dark/5 before:pointer-events-none" id="experience">
            <div className="main-container">
                <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary via-pink-400 to-primary-dark bg-clip-text text-transparent relative after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:transform after:-translate-x-1/2 after:w-24 after:h-1 after:bg-gradient-to-r after:from-primary after:to-primary-dark after:rounded-full md:text-3xl md:mb-10">Professional Experience</h2>
                <div className="relative max-w-6xl mx-auto px-4 before:content-[''] before:absolute before:top-0 before:left-1/2 before:w-0.5 before:h-full before:bg-gradient-to-b before:from-primary/60 before:via-primary/30 before:to-primary/60 before:transform before:-translate-x-1/2 before:rounded-full before:shadow-[0_0_20px_rgba(170,54,124,0.4)] md:before:left-8">
                    {experiences.map((exp, index) => (
                        <div key={index}
                            className={`relative w-full max-w-lg mb-12 transition-all duration-500 ease-out opacity-0 animate-fadeInUp 
                                ${index % 2 === 0 ? "mr-auto pr-12 md:mr-0 md:pl-16 md:pr-4 text-left" : "ml-auto pl-12 md:ml-0 md:pl-16 md:pr-4 text-left"} 
                                md:w-full md:max-w-full md:mb-8`}
                            style={{ animationDelay: `${0.1 + index * 0.2}s` }}>
                            <div className="relative p-8 rounded-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 cursor-pointer 
                                bg-gradient-to-t from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.05)] 
                                backdrop-blur-xl border border-solid border-[rgba(255,255,255,0.1)] 
                                shadow-[0_10px_32px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.05),inset_0_1px_0_rgba(255,255,255,0.1)]
                                hover:shadow-[0_20px_60px_rgba(170,54,124,0.2),0_10px_32px_rgba(0,0,0,0.4),0_0_0_1px_rgba(170,54,124,0.1),inset_0_1px_0_rgba(255,255,255,0.2)]
                                before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-transparent before:via-primary/5 before:to-primary-dark/10 before:opacity-0 before:rounded-2xl before:transition-opacity before:duration-500 before:ease-out before:pointer-events-none
                                hover:before:opacity-100 group md:p-6">

                                <div className="inline-block px-4 py-2 mb-4 text-sm font-semibold rounded-full bg-gradient-to-r from-primary/20 to-primary-dark/20 border border-solid border-primary/30 text-blue-300 transition-transform duration-300 group-hover:scale-105 md:text-xs md:px-3 md:py-1.5">
                                    <FaClock className="inline mr-2" />
                                    {exp.duration}
                                </div>

                                <h3 className="flex items-center text-2xl font-bold mb-3 text-white leading-tight transition-transform duration-300 group-hover:translate-x-1 md:text-xl">
                                    <FaBriefcase className="mr-3 text-primary" />
                                    {exp.position}
                                </h3>

                                <h4 className="text-lg font-medium mb-4 text-blue-300 leading-relaxed md:text-base">
                                    <a href={exp.companyLink} target="_blank" rel="noopener noreferrer"
                                        className="relative text-blue-300 font-bold no-underline transition-all duration-300 ease-out hover:text-blue-500 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-primary-dark after:transition-all after:duration-300 after:ease-out hover:after:w-full">
                                        {exp.company}
                                    </a>
                                    {exp.location && (
                                        <span className="ml-3 text-sm text-gray-400">
                                            <FaMapMarkerAlt className="inline mr-1" />
                                            {exp.location}
                                        </span>
                                    )}
                                </h4>

                                <p className="mb-4 text-base text-gray-300 leading-7">{exp.description}</p>

                                {exp.highlights && (
                                    <>
                                        <h5 className="text-sm font-semibold text-blue-300 mb-2 mt-4">Key Achievements:</h5>
                                        <ul className="list-none space-y-2 mt-4">
                                            {exp.highlights.map((highlight, idx) => (
                                                <li key={idx} className="flex items-start text-sm text-gray-300 leading-7">
                                                    <span className="w-2 h-2 bg-gradient-to-r from-primary to-primary-dark rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default Experience;
