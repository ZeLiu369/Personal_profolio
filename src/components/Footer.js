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
        <footer className="footer">
            <div className="main-container">
                <div className="flex items-center justify-between flex-col sm:flex-row">
                    <div className="w-full sm:w-1/2">
                        <img src={avatar} alt="avator" className="logo-avatar" onClick={scrollToTop} />
                    </div>
                    <div className="w-full sm:w-1/2 text-center sm:text-right">
                        <p>Copyright 2024. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

