import { useState, useEffect } from "react";
import avatar from "../assets/img/self.png"; // 导入你的头像
import navIcon1 from '../assets/img/nav-icon1.svg';
import githubmarkwhite from '../assets/img/githubmarkwhite.svg'
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () =>
{
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() =>
    {
        const onScroll = () =>
        {
            if (window.scrollY > 50)
            {
                setScrolled(true);
            } else
            {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) =>
    {
        setActiveLink(value);
        setMobileMenuOpen(false); // 关闭移动菜单
    }

    const toggleMobileMenu = () =>
    {
        setMobileMenuOpen(!mobileMenuOpen);
    }

    const handleMouseMove = (e) =>
    {
        const link = e.currentTarget;
        const rect = link.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        link.style.setProperty('--mouse-x', `${x}px`);
        link.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <Router>
            <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out ${scrolled ? 'py-0 bg-black' : 'py-3'}`}>
                <div className="main-container">
                    <div className="flex items-center justify-between w-full">
                        {/* Logo/Avatar */}
                        <a href="/" className="w-auto">
                            <img src={avatar} alt="avatar" className="w-12 h-12 rounded-full object-cover border-2 border-white transition-transform duration-300 ease-in-out hover:scale-110 sm:w-10 sm:h-10" />
                        </a>

                        {/* Mobile menu button */}
                        <button
                            className="navbar-toggler md:hidden focus:outline-none focus:shadow-none active:outline-none active:shadow-none"
                            aria-controls="mobile-menu"
                            aria-expanded={mobileMenuOpen}
                            onClick={toggleMobileMenu}
                        >
                            <span className={`block w-6 h-4 relative transition-all duration-300 ease-linear top-[-2px] bg-none
                                before:w-6 before:absolute before:h-0.5 before:bg-white before:left-0 before:content-[''] before:z-20 before:transition-all before:duration-300 before:ease-linear
                                after:w-6 after:absolute after:h-0.5 after:bg-white after:left-0 after:content-[''] after:z-20 after:transition-all after:duration-300 after:ease-linear
                                ${mobileMenuOpen
                                    ? "border-transparent before:translate-y-2 before:-rotate-45 after:rotate-45 after:top-2"
                                    : "border-b-2 border-white before:top-0 after:top-2"
                                }`}>
                            </span>
                        </button>

                        {/* Desktop menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <div className="flex items-center space-x-2">
                                <a href="#home" onMouseMove={handleMouseMove} className={`nav-link relative font-normal tracking-wider px-5 py-2 rounded-full text-lg lg:px-4 lg:text-base overflow-hidden transition-colors duration-300 ease-in-out ${activeLink === 'home' ? 'text-white' : 'text-white/75'}`} onClick={() => onUpdateActiveLink('home')}>
                                    <span className="relative z-10">Home</span>
                                </a>
                                <a href="#skills" onMouseMove={handleMouseMove} className={`nav-link relative font-normal tracking-wider px-5 py-2 rounded-full text-lg lg:px-4 lg:text-base overflow-hidden transition-colors duration-300 ease-in-out ${activeLink === 'skills' ? 'text-white' : 'text-white/75'}`} onClick={() => onUpdateActiveLink('skills')}>
                                    <span className="relative z-10">Skills</span>
                                </a>
                                <a href="#experience" onMouseMove={handleMouseMove} className={`nav-link relative font-normal tracking-wider px-5 py-2 rounded-full text-lg lg:px-4 lg:text-base overflow-hidden transition-colors duration-300 ease-in-out ${activeLink === 'experience' ? 'text-white' : 'text-white/75'}`} onClick={() => onUpdateActiveLink('experience')}>
                                    <span className="relative z-10">Experience</span>
                                </a>
                                <a href="#education" onMouseMove={handleMouseMove} className={`nav-link relative font-normal tracking-wider px-5 py-2 rounded-full text-lg lg:px-4 lg:text-base overflow-hidden transition-colors duration-300 ease-in-out ${activeLink === 'education' ? 'text-white' : 'text-white/75'}`} onClick={() => onUpdateActiveLink('education')}>
                                    <span className="relative z-10">Education</span>
                                </a>
                                <a href="#projects" onMouseMove={handleMouseMove} className={`nav-link relative font-normal tracking-wider px-5 py-2 rounded-full text-lg lg:px-4 lg:text-base overflow-hidden transition-colors duration-300 ease-in-out ${activeLink === 'projects' ? 'text-white' : 'text-white/75'}`} onClick={() => onUpdateActiveLink('projects')}>
                                    <span className="relative z-10">Projects & Publications</span>
                                </a>
                            </div>
                            <div className="flex items-center space-x-4">
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
                                <HashLink to='#connect'>
                                    <button className="font-bold text-white border border-white py-4 px-8 text-lg ml-4 relative bg-transparent transition-all duration-300 ease-in-out hover:text-dark
                                        before:content-[''] before:w-0 before:h-full before:absolute before:bg-white before:left-0 before:top-0 before:-z-10 before:transition-all before:duration-300 before:ease-in-out
                                        hover:before:w-full
                                        lg:py-3 lg:px-6 lg:text-base
                                    ">
                                        <span className="z-10 relative">Let's Connect</span>
                                    </button>
                                </HashLink>
                            </div>
                        </div>

                        {/* Mobile menu */}
                        <div className={`md:hidden absolute top-full left-0 w-full bg-dark transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                            <div className="bg-dark p-4 rounded mt-3">
                                <div className="flex flex-col items-center space-y-2 mt-3">
                                    <a href="#home" className={`py-3 w-full text-center rounded-lg font-normal tracking-wider text-lg transition-colors duration-300 ease-in-out hover:bg-white/10 hover:text-white ${activeLink === 'home' ? 'text-white' : 'text-white/75'}`} onClick={() => onUpdateActiveLink('home')}>Home</a>
                                    <a href="#skills" className={`py-3 w-full text-center rounded-lg font-normal tracking-wider text-lg transition-colors duration-300 ease-in-out hover:bg-white/10 hover:text-white ${activeLink === 'skills' ? 'text-white' : 'text-white/75'}`} onClick={() => onUpdateActiveLink('skills')}>Skills</a>
                                    <a href="#experience" className={`py-3 w-full text-center rounded-lg font-normal tracking-wider text-lg transition-colors duration-300 ease-in-out hover:bg-white/10 hover:text-white ${activeLink === 'experience' ? 'text-white' : 'text-white/75'}`} onClick={() => onUpdateActiveLink('experience')}>Experience</a>
                                    <a href="#education" className={`py-3 w-full text-center rounded-lg font-normal tracking-wider text-lg transition-colors duration-300 ease-in-out hover:bg-white/10 hover:text-white ${activeLink === 'education' ? 'text-white' : 'text-white/75'}`} onClick={() => onUpdateActiveLink('education')}>Education</a>
                                    <a href="#projects" className={`py-3 w-full text-center rounded-lg font-normal tracking-wider text-lg transition-colors duration-300 ease-in-out hover:bg-white/10 hover:text-white ${activeLink === 'projects' ? 'text-white' : 'text-white/75'}`} onClick={() => onUpdateActiveLink('projects')}>Projects & Publications</a>
                                </div>
                                <div className="mt-4 text-center">
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
                                <HashLink to='#connect' className="flex justify-center mt-4">
                                    <button className="font-bold text-white border border-white py-4 px-8 text-lg relative bg-transparent transition-all duration-300 ease-in-out hover:text-dark
                                        before:content-[''] before:w-0 before:h-full before:absolute before:bg-white before:left-0 before:top-0 before:-z-10 before:transition-all before:duration-300 before:ease-in-out
                                        hover:before:w-full
                                        lg:py-3 lg:px-6 lg:text-base
                                    ">
                                        <span className="z-10 relative">Let's Connect</span>
                                    </button>
                                </HashLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </Router>
    )
}
