import avatar from "../assets/img/self.png"; // 导入你的头像
import navIcon1 from "../assets/img/nav-icon1.svg";
import githubmarkwhite from '../assets/img/githubmarkwhite.svg'

export const Footer = () =>
{
    const scrollToTop = () =>
    {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="pb-12 bg-footer bg-center bg-cover bg-no-repeat">
            <div className="main-container">
                <div className="flex items-center justify-between flex-col sm:flex-row">
                    <div className="w-full sm:w-1/2">
                        <img src={avatar} alt="avator" className="w-16 h-16 rounded-full object-cover block mx-auto my-5 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110" onClick={scrollToTop} />
                    </div>
                    <div className="w-full sm:w-1/2 text-center sm:text-right">
                        <div className="inline-block ml-4">
                            <a href="https://www.linkedin.com/in/zeliu369/" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 bg-white bg-opacity-10 inline-flex rounded-full mr-2 items-center justify-center border border-white border-opacity-50 relative transition-all duration-300 ease-in-out
                                before:content-[''] before:w-10 before:h-10 before:absolute before:bg-white before:rounded-full before:scale-0 before:transition-all before:duration-300 before:ease-in-out
                                hover:before:scale-100
                            ">
                                <img src={navIcon1} alt="LinkedIn" className="w-2/5 z-10 transition-all duration-300 ease-in-out group-hover:brightness-0" />
                            </a>
                            <a href="https://github.com/ZeLiu369/" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 bg-white bg-opacity-10 inline-flex rounded-full mr-2 items-center justify-center border border-white border-opacity-50 relative transition-all duration-300 ease-in-out
                                before:content-[''] before:w-10 before:h-10 before:absolute before:bg-white before:rounded-full before:scale-0 before:transition-all before:duration-300 before:ease-in-out
                                hover:before:scale-100
                            ">
                                <img src={githubmarkwhite} alt="GitHub" className="w-2/5 z-10 transition-all duration-300 ease-in-out group-hover:brightness-0" />
                            </a>
                        </div>
                        <p className="font-normal text-sm text-light-muted tracking-wide mt-5">Copyright 2024. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

