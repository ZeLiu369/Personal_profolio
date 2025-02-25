import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import avatar from "../assets/img/self.png"; // 导入你的头像
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import githubmarkwhite from '../assets/img/githubmarkwhite.svg'

export const Footer = () =>
{
    const scrollToTop = () =>
    {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <img src={avatar} alt="avator" className="logo-avatar" onClick={scrollToTop} />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        {/* <div className="social-icon">
                            <a href="https://www.linkedin.com/in/zeliu369/"><img src={navIcon1} alt="" /></a>
                            <a href="https://github.com/ZeLiu369/"><img src={githubmarkwhite} alt="" /></a>
                        </div> */}
                        <p>Copyright 2024. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

{/* <Navbar.Brand href="/">
                        <img src={avatar} alt="avator" className="logo-avatar" />
                    </Navbar.Brand> */}
