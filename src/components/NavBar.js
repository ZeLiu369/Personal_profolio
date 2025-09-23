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

    return (
        <Router>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="main-container">
                    <div className="flex items-center justify-between w-full">
                        {/* Logo/Avatar */}
                        <a href="/" className="navbar-brand">
                            <img src={avatar} alt="avatar" className="logo-avatar" />
                        </a>

                        {/* Mobile menu button */}
                        <button
                            className={`navbar-toggler md:hidden ${mobileMenuOpen ? '[aria-expanded="true"]' : ''}`}
                            aria-controls="mobile-menu"
                            onClick={toggleMobileMenu}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* Desktop menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <div className="flex space-x-6">
                                <a href="#home" className={`navbar-link ${activeLink === 'home' ? 'active' : ''}`} onClick={() => onUpdateActiveLink('home')}>Home</a>
                                <a href="#skills" className={`navbar-link ${activeLink === 'skills' ? 'active' : ''}`} onClick={() => onUpdateActiveLink('skills')}>Skills</a>
                                <a href="#experience" className={`navbar-link ${activeLink === 'experience' ? 'active' : ''}`} onClick={() => onUpdateActiveLink('experience')}>Experience</a>
                                <a href="#education" className={`navbar-link ${activeLink === 'education' ? 'active' : ''}`} onClick={() => onUpdateActiveLink('education')}>Education</a>
                                <a href="#projects" className={`navbar-link ${activeLink === 'projects' ? 'active' : ''}`} onClick={() => onUpdateActiveLink('projects')}>Projects</a>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="social-icon">
                                    <a href="https://www.linkedin.com/in/zeliu369/" target="_blank" rel="noopener noreferrer">
                                        <img src={navIcon1} alt="LinkedIn" />
                                    </a>
                                    <a href="https://github.com/ZeLiu369/" target="_blank" rel="noopener noreferrer">
                                        <img src={githubmarkwhite} alt="GitHub" />
                                    </a>
                                </div>
                                <HashLink to='#connect'>
                                    <button className="navbar-connect-btn"><span>Let's Connect</span></button>
                                </HashLink>
                            </div>
                        </div>

                        {/* Mobile menu */}
                        <div className={`md:hidden absolute top-full left-0 w-full bg-dark transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                            <div className="navbar-collapse">
                                <div className="navbar-nav">
                                    <a href="#home" className={`navbar-link ${activeLink === 'home' ? 'active' : ''}`} onClick={() => onUpdateActiveLink('home')}>Home</a>
                                    <a href="#skills" className={`navbar-link ${activeLink === 'skills' ? 'active' : ''}`} onClick={() => onUpdateActiveLink('skills')}>Skills</a>
                                    <a href="#experience" className={`navbar-link ${activeLink === 'experience' ? 'active' : ''}`} onClick={() => onUpdateActiveLink('experience')}>Experience</a>
                                    <a href="#education" className={`navbar-link ${activeLink === 'education' ? 'active' : ''}`} onClick={() => onUpdateActiveLink('education')}>Education</a>
                                    <a href="#projects" className={`navbar-link ${activeLink === 'projects' ? 'active' : ''}`} onClick={() => onUpdateActiveLink('projects')}>Projects</a>
                                </div>
                                <div className="social-icon">
                                    <a href="https://www.linkedin.com/in/zeliu369/" target="_blank" rel="noopener noreferrer">
                                        <img src={navIcon1} alt="LinkedIn" />
                                    </a>
                                    <a href="https://github.com/ZeLiu369/" target="_blank" rel="noopener noreferrer">
                                        <img src={githubmarkwhite} alt="GitHub" />
                                    </a>
                                </div>
                                <HashLink to='#connect'>
                                    <button className="navbar-connect-btn"><span>Let's Connect</span></button>
                                </HashLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </Router>
    )
}
