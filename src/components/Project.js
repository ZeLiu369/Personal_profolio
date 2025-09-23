import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import travelPlaceImg from "../assets/img/travelPlace.png";
import parklot_detection from "../assets/img/parklot_detection.png";
import planet_hopper from "../assets/img/planet_hopper.png";
import zcamp_hero from "../assets/img/zcamp_hero.png";
import tts from "../assets/img/tts.png";
import paper from "../assets/img/paper.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () =>
{
    const [activeTab, setActiveTab] = useState('first');

    const projects = [
        {
            title: "ZCamp",
            description: "A full-stack web application built with the PERN stack for discovering, sharing, and reviewing campgrounds.",
            img: zcamp_hero,
            link: "https://zcamp.me",
            techStack: "React(Next.js) | TypeScript | Node.js(Express) | PostgreSQL(PostGIS) | Redis | AWS S3 | Docker | Mapbox "
        },
        {
            title: "Travel Place",
            description: "A full-stack website travel destinations and allows registered users to CRUD their own posts images, and reviews.",
            img: travelPlaceImg,
            link: "https://github.com/ZeLiu369/TravelPlace",
            techStack: "JavaScript | BootStrap | MongoDB | HTML | CSS | Express.js | Node.js"
        },

        {
            title: "Parking Lot Detection",
            description: "CNN to detect empty space of parking lots",
            img: parklot_detection,
            link: "https://github.com/ZeLiu369/Computer_Version_Parking_Lot_Detection",
            techStack: "Python | OpenCV | NumPy · Convolutional Neural Networks (CNN) | Keras"
        },
        {
            title: "Planet Hopper",
            description: "A 2D sci-fi platformer where players navigate levels, battle alien enemies, and explore planets via a spaceship. Features include pathfinding NPCs, camera tracking, level selection, anti-gravity mechanics, and collectibles.",
            img: planet_hopper,
            link: "https://github.com/ZeLiu369/Planet_Hopper",
            techStack: "C++"
        },

    ];

    const publications = [
        {
            title: "Enhancing Leg Odometry in Legged Robots with Learned Contact Bias: An LSTM Recurrent Neural Network Approach: IEEE/RSJ IROS 2024",
            description: "Trained LSTM & RNN neural networks, reducing Legged Robots odometry errors by 64.93%.",
            img: paper,
            link: "https://github.com/ZeLiu369/TravelPlace"
        },
        {
            title: "Comparative Analysis of Transfer Learning in Deep Learning Text-to-Speech Models on a Few-Shot, Low-Resource, Customized Dataset",
            description: "This study explores transfer learning to enhance TTS with minimal data, balancing efficiency and quality. Findings suggest it enables high-quality synthesis in low-resource settings.",
            img: tts,
            link: "https://arxiv.org/abs/2310.04982v1"
        },
    ]

    return (
        <section className="project" id="projects">
            <div className="main-container">
                <div className="flex justify-center">
                    <div className="w-full">
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    {/* <h2>Projects</h2> */}
                                    {/* Custom Tab Navigation */}
                                    <div className="flex justify-center mb-12">
                                        <div className="relative flex p-1 bg-white/5 rounded-full backdrop-blur-xl border border-white/10 shadow-lg">
                                            <button
                                                className={`relative w-48 px-4 py-3 text-lg font-medium text-white transition-colors duration-300 ease-in-out z-10 rounded-full outline-none focus:outline-none md:w-40 md:text-base sm:w-36 sm:text-sm ${activeTab !== 'first' ? 'hover:text-white/80' : ''}`}
                                                onClick={() => setActiveTab('first')}
                                            >
                                                Projects
                                            </button>
                                            <button
                                                className={`relative w-48 px-4 py-3 text-lg font-medium text-white transition-colors duration-300 ease-in-out z-10 rounded-full outline-none focus:outline-none md:w-40 md:text-base sm:w-36 sm:text-sm ${activeTab !== 'second' ? 'hover:text-white/80' : ''}`}
                                                onClick={() => setActiveTab('second')}
                                            >
                                                Publications
                                            </button>
                                            <span
                                                className={`absolute top-1 h-[calc(100%-0.5rem)] w-48 md:w-40 sm:w-36 bg-gradient-to-r from-primary/80 to-primary-dark/80 rounded-full shadow-md transition-transform duration-300 ease-in-out
                                                ${activeTab === 'first' ? 'transform translate-x-0' : 'transform translate-x-full'}`}
                                                style={{ transform: activeTab === 'second' ? 'translateX(calc(100% - 4px))' : 'translateX(4px)' }}
                                            ></span>
                                        </div>
                                    </div>

                                    {/* Tab Content */}
                                    <div id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                        {activeTab === 'first' && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                {projects.map((project, index) => (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                ))}
                                            </div>
                                        )}

                                        {activeTab === 'second' && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                {publications.map((publication, index) => (
                                                    <ProjectCard
                                                        key={index}
                                                        {...publication}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>}
                        </TrackVisibility>
                    </div>
                </div>
            </div>
            <img className="top-20 absolute bottom-0 w-1/3 right-0 -z-10" src={colorSharp2} alt="backgroundImage" />
        </section>
    )
}
