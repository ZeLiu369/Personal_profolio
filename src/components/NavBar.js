import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import avatar from "../assets/img/self.png"; // 导入你的头像
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import githubMark from '../assets/img/githubMark.svg';
import githubmarkwhite from '../assets/img/githubmarkwhite.svg'
import { HashLink } from 'react-router-hash-link';
import
{
    BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () =>
{

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

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
    }

    return (
        <Router>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="main-container">
                    <div className="flex items-center justify-between w-full">
                        <a href="/" className="navbar-brand">
                            <img src={avatar} alt="avator" className="logo-avatar" />
                        </a>
                        <button
                            className="navbar-toggler md:hidden"
                            aria-controls="basic-navbar-nav"
                            onClick={() => {/* Add mobile menu toggle logic */ }}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
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
                    </div>
                </div>
            </nav>
        </Router>
    )
}
