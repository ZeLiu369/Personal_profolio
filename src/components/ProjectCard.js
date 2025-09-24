
export const ProjectCard = ({ title = "Untitled", description = "No description available", img = "www.example.com", link = "#", techStack = "Unknown", type = "github", githubLink = null }) =>
{
    return (
        <div className="bg-white bg-opacity-5 rounded-3xl overflow-hidden mb-8 transition-all duration-300 border border-solid border-white border-opacity-10 backdrop-blur-xl hover:-translate-y-3 hover:bg-white hover:bg-opacity-10 hover:shadow-2xl hover:border-white hover:border-opacity-20 sm:mb-6 sm:hover:-translate-y-1">
            <div className="relative rounded-t-3xl overflow-hidden h-60 md:mb-5 md:h-48 sm:h-44">
                <a href={link} target="_blank" rel="noopener noreferrer" className="no-underline text-inherit">
                    <img src={img} alt={title} className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out hover:scale-110" />
                </a>
            </div>
            <div className="p-6 text-left sm:p-5 md:p-4">
                <h5 className="text-xl font-bold text-white mb-3 leading-tight sm:text-lg sm:mb-2">{title}</h5>
                <p className="text-sm text-white text-opacity-80 leading-6 mb-4 overflow-hidden project-description-clamp sm:text-xs sm:mb-3" style={{ whiteSpace: 'pre-line' }}>{description}</p>
                <div className="text-xs text-blue-300 mb-5 leading-6 font-medium sm:mb-4">{techStack}</div>
                <div className="flex flex-wrap gap-3">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-primary to-primary-dark text-white py-3 px-5 rounded-full no-underline text-sm font-semibold transition-all duration-300 border-none shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:-translate-y-1 hover:shadow-2xl hover:text-white sm:py-2 sm:px-4 sm:text-xs">
                        {type === "demo" ? "View Demo" : "View GitHub"}
                    </a>
                    {githubLink && type === "demo" && (
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-primary to-primary-dark text-white py-3 px-5 rounded-full no-underline text-sm font-semibold transition-all duration-300 border-none shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:-translate-y-1 hover:shadow-2xl hover:text-white sm:py-2 sm:px-4 sm:text-xs">
                            View GitHub
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

<style jsx>{`
    .project-description-clamp {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
    @media (max-width: 639px) {
        .project-description-clamp {
            -webkit-line-clamp: 2;
        }
    }
`}</style>
