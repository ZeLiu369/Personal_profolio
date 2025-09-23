import { FaCode, FaDatabase, FaBrain, FaChartBar } from 'react-icons/fa';
import colorSharp from "../assets/img/color-sharp.png";

const SkillBar = ({ skill, percentage, icon, technologies }) =>
{
    return (
        <div className="skill-item">
            <div className="skill-info">
                <div className="skill-header">
                    {icon}
                    <h5>{skill}</h5>
                </div>
                <div className="percentage">{percentage}%</div>
            </div>
            <div className="skill-bar">
                <div
                    className="skill-bar-fill"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
            <div className="skill-technologies">
                {technologies}
            </div>
        </div>
    );
};

export const Skills = () =>
{
    const skills = [
        {
            skill: "Full-Stack Development",
            percentage: 95,
            icon: <FaDatabase className="skill-icon" />,
            technologies: [
                "Frontend: React, Redux, JavaScript, TypeScript, HTML, CSS, Tailwind CSS, Bootstrap, Material UI",
                "Backend: Node.js, Express, Flask, Django, FastAPI, RESTful API design",
                "Database: MongoDB, PostgreSQL, MySQL",
                "Cloud: AWS, Azure, Docker, Kubernetes",
                "CI/CD: Git, GitHub Actions"
            ].map(line =>
            {
                const [category, ...rest] = line.split(': ');
                return `${category}: ${rest.join(': ')}`;
            }).join('\n')
        },
        {
            skill: "Software Engineering",
            percentage: 95,
            icon: <FaCode className="skill-icon" />,
            technologies: "C++, C#, C, Java, Python"
        },
        {
            skill: "AI & Machine Learning",
            percentage: 95,
            icon: <FaBrain className="skill-icon" />,
            technologies: "TensorFlow, PyTorch, Scikit-learn, Neural Networks"
        },
        {
            skill: "Data Analysis",
            percentage: 80,
            icon: <FaChartBar className="skill-icon" />,
            technologies: "Pandas, NumPy, Data Visualization, Statistical Analysis"
        }
    ];

    return (
        <section className="skill" id="skills">
            <div className="main-container">
                <div className="flex justify-center">
                    <div className="w-full">
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <div className="skills-container">
                                {skills.map((item, index) => (
                                    <SkillBar
                                        key={index}
                                        skill={item.skill}
                                        percentage={item.percentage}
                                        icon={item.icon}
                                        technologies={item.technologies}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="" />
        </section>
    );
};
