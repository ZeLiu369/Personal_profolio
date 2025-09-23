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
                                    <h2>Projects</h2>
                                    {/* Custom Tab Navigation */}
                                    <div className="nav-pills flex justify-center items-center mb-5" id="pills-tab">
                                        <div className="flex w-3/4 mx-auto rounded-full bg-white bg-opacity-10 overflow-hidden sm:w-full sm:mx-auto md:w-full">
                                            <button
                                                className={`py-4 px-0 text-white w-1/2 text-lg tracking-wider font-medium relative transition-all duration-300 ease-in-out text-center z-0 before:content-[''] before:absolute before:w-0 before:h-full before:bg-gradient-to-r before:from-primary before:to-primary-dark before:top-0 before:left-0 before:-z-10 before:transition-all before:duration-300 before:ease-in-out border border-white border-opacity-50 rounded-l-full
                            ${activeTab === 'first' ? 'active before:w-full border-white' : ''}
                            sm:w-full sm:mb-3 sm:text-center sm:py-4 sm:px-5 sm:text-base sm:font-medium sm:text-white sm:text-opacity-80 sm:border sm:border-white sm:border-opacity-10 sm:transition-all sm:duration-300 sm:m-0 sm:rounded-xl sm:bg-white sm:bg-opacity-5 sm:backdrop-blur-sm
                            sm:active:bg-gradient-to-r sm:active:from-primary/90 sm:active:to-primary-dark/90 sm:active:border-none sm:active:text-white sm:active:shadow-lg sm:active:-translate-y-1
                            sm:not-active:hover:bg-white sm:not-active:hover:bg-opacity-10 sm:not-active:hover:-translate-y-0.5 sm:not-active:hover:shadow-md
                            sm:before:hidden
                            md:w-full`}
                                                onClick={() => setActiveTab('first')}
                                            >
                                                Projects
                                            </button>
                                            <button
                                                className={`py-4 px-0 text-white w-1/2 text-lg tracking-wider font-medium relative transition-all duration-300 ease-in-out text-center z-0 before:content-[''] before:absolute before:w-0 before:h-full before:bg-gradient-to-r before:from-primary before:to-primary-dark before:top-0 before:left-0 before:-z-10 before:transition-all before:duration-300 before:ease-in-out border border-white border-opacity-50 rounded-r-full
                            ${activeTab === 'second' ? 'active before:w-full border-white' : ''}
                            sm:w-full sm:mb-3 sm:text-center sm:py-4 sm:px-5 sm:text-base sm:font-medium sm:text-white sm:text-opacity-80 sm:border sm:border-white sm:border-opacity-10 sm:transition-all sm:duration-300 sm:m-0 sm:rounded-xl sm:bg-white sm:bg-opacity-5 sm:backdrop-blur-sm
                            sm:active:bg-gradient-to-r sm:active:from-primary/90 sm:active:to-primary-dark/90 sm:active:border-none sm:active:text-white sm:active:shadow-lg sm:active:-translate-y-1
                            sm:not-active:hover:bg-white sm:not-active:hover:bg-opacity-10 sm:not-active:hover:-translate-y-0.5 sm:not-active:hover:shadow-md
                            sm:before:hidden
                            md:w-full`}
                                                onClick={() => setActiveTab('second')}
                                            >
                                                Publications/Papers
                                            </button>
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
