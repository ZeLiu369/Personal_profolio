import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
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
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills flex justify-center items-center mb-5" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Projects</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Publications/Papers</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                    {projects.map((project, index) => (
                                                        <ProjectCard
                                                            key={index}
                                                            {...project}
                                                        />
                                                    ))}
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                    {publications.map((publication, index) => (
                                                        <ProjectCard
                                                            key={index}
                                                            {...publication}
                                                        />
                                                    ))}
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </div>
                </div>
            </div>
            <img className="background-image-right" src={colorSharp2} alt="backgroundImage" />
        </section>
    )
}
