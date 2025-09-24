import { FaCode, FaDatabase, FaBrain, FaChartBar } from 'react-icons/fa';
import colorSharp from "../assets/img/color-sharp.png";

const SkillBar = ({ skill, percentage, icon, technologies }) =>
{
    return (
        <div className="bg-dark bg-opacity-95 rounded-2xl p-6 mb-5 border border-white border-opacity-10 transition-transform duration-300 backdrop-blur-sm hover:-translate-y-1 sm:p-5">
            <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                    {icon}
                    <h5 className="m-0 text-lg font-semibold text-white sm:text-base">{skill}</h5>
                </div>
                <div className="text-base font-semibold text-blue-300 sm:text-sm">{percentage}%</div>
            </div>
            <div className="h-2 bg-white bg-opacity-10 rounded overflow-hidden mb-3 sm:h-1.5">
                <div
                    className="h-full bg-gradient-to-r from-primary to-primary-dark rounded transition-all duration-1000 ease-in-out"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
            <div className="text-sm text-white text-opacity-70 mt-3 whitespace-pre-line leading-7 text-left pl-3 border-l-2 border-primary border-opacity-50 sm:text-xs">
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
            icon: <FaDatabase className="text-2xl text-blue-300 sm:text-xl" />,
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
            icon: <FaCode className="text-2xl text-blue-300 sm:text-xl" />,
            technologies: "C++, C#, C, Java, Python"
        },
        {
            skill: "AI & Machine Learning",
            percentage: 95,
            icon: <FaBrain className="text-2xl text-blue-300 sm:text-xl" />,
            technologies: "TensorFlow, PyTorch, Scikit-learn, Neural Networks"
        },
        {
            skill: "Data Analysis",
            percentage: 80,
            icon: <FaChartBar className="text-2xl text-blue-300 sm:text-xl" />,
            technologies: "Pandas, NumPy, Data Visualization, Statistical Analysis"
        }
    ];

    return (
        <section className="relative" id="skills">
            <div className="main-container">
                <div className="flex justify-center">
                    <div className="w-full">
                        <div className="bg-white bg-opacity-5 rounded-3xl text-center py-8 px-12 mt-16 backdrop-blur-sm sm:py-4 sm:px-3 md:py-5 md:px-4 lg:py-8 lg:px-5">
                            <h2 className="text-4xl font-bold mb-5">Skills</h2>
                            <div className="max-w-4xl mx-auto py-3 px-8 sm:py-3 sm:px-4">
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
            <img className="top-1/4 absolute bottom-0 w-2/5 -z-10" src={colorSharp} alt="" />
        </section>
    );
};
