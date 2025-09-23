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
        <section className="py-20 bg-gradient-to-br from-dark via-dark-lighter to-dark relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/5 before:to-primary-dark/5 before:pointer-events-none" id="education">
            <div className="main-container">
                <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary via-pink-400 to-primary-dark bg-clip-text text-transparent relative after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:transform after:-translate-x-1/2 after:w-24 after:h-1 after:bg-gradient-to-r after:from-primary after:to-primary-dark after:rounded-full md:text-3xl md:mb-10">Academic Journey</h2>
                <div className="relative max-w-6xl mx-auto px-4 before:content-[''] before:absolute before:top-0 before:left-1/2 before:w-0.5 before:h-full before:bg-gradient-to-b before:from-primary/60 before:via-primary/30 before:to-primary/60 before:transform before:-translate-x-1/2 before:rounded-full before:shadow-[0_0_20px_rgba(170,54,124,0.4)] md:before:left-8">
                    {education.map((edu, index) => (
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

                                <div className={`absolute top-8 w-6 h-6 rounded-full z-20 transition-all duration-300 ease-out 
                                    bg-gradient-to-t from-[#AA367C] to-[#4A2FBD] 
                                    shadow-[0_0_20px_rgba(170,54,124,0.6),0_0_40px_rgba(170,54,124,0.3),inset_0_2px_4px_rgba(255,255,255,0.2)] 
                                    hover:scale-125 animate-pulse
                                    group-hover:scale-125 group-hover:shadow-[0_0_30px_rgba(170,54,124,0.8),0_0_60px_rgba(170,54,124,0.4),inset_0_2px_4px_rgba(255,255,255,0.3)]
                                    ${index % 2 === 0 ? "right-0 transform translate-x-1/2 md:left-6 md:-translate-x-0" : "left-0 transform -translate-x-1/2 md:left-6 md:-translate-x-0"}
                                    md:w-5 md:h-5`}>
                                </div>

                                <div className="inline-block px-4 py-2 mb-4 text-sm font-semibold rounded-full bg-gradient-to-r from-primary/20 to-primary-dark/20 border border-solid border-primary/30 text-blue-300 transition-transform duration-300 group-hover:scale-105 md:text-xs md:px-3 md:py-1.5">
                                    <FaClock className="inline mr-2" />
                                    {edu.duration}
                                </div>

                                <h3 className="flex items-center text-2xl font-bold mb-3 text-white leading-tight transition-transform duration-300 group-hover:translate-x-1 md:text-xl">
                                    {getLevelIcon(edu.level)}
                                    <span className="ml-3">{edu.school}</span>
                                </h3>

                                <h4 className="text-lg font-medium mb-4 text-blue-300 leading-relaxed md:text-base">
                                    <a href={edu.link} target="_blank" rel="noopener noreferrer"
                                        className="relative text-blue-300 font-bold no-underline transition-all duration-300 ease-out hover:text-blue-500 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-primary-dark after:transition-all after:duration-300 after:ease-out hover:after:w-full">
                                        {edu.degree}
                                    </a>
                                    {edu.location && (
                                        <span className="ml-3 text-sm text-gray-400">
                                            <FaMapMarkerAlt className="inline mr-1" />
                                            {edu.location}
                                        </span>
                                    )}
                                </h4>

                                <p className="mb-4 text-base text-gray-300 leading-7">{edu.description}</p>

                                {edu.highlights && (
                                    <div className="mt-4">
                                        <h5 className="text-sm font-semibold text-blue-300 mb-2 mt-4">Key Areas:</h5>
                                        <ul className="list-none space-y-2">
                                            {edu.highlights.map((highlight, idx) => (
                                                <li key={idx} className="flex items-start text-sm text-gray-300 leading-7">
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
        </section >
    );
};

export default Education;
