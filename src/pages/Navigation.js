import Logo from "../img/logo2.png"
import HomeIcon from "../img/home-2.svg"
import AboutIcon from "../img/about.svg"
import ServicesIcon from "../img/service.svg"
import SkillsIcon from "../img/skills.svg"
import PortfolioIcon from "../img/portfolio.svg"
import BlogIcon from "../img/blog.svg"
import ContactIcon from "../img/contact.svg"
import { Link } from "react-router-dom";

function Navigation() {

    return (
        <nav>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <div className="links grid">
                <div className="flex linkContainer">
                    <div className="imgBox">
                        <img src={HomeIcon} alt="" />
                    </div>
                    <div className="link-box">
                        <Link to="/" className="nav-link flex">
                            <div>H</div>
                            <div>O</div>
                            <div>M</div>
                            <div>E</div>
                        </Link>
                    </div>
                </div>
                <div className="flex linkContainer">
                    <div className="imgBox">
                        <img src={AboutIcon} alt="" />
                    </div>
                    <div className="link-box">
                        <Link className="nav-link flex" to="/about">
                            <div>A</div>
                            <div>B</div>
                            <div>O</div>
                            <div>U</div>
                            <div>T</div>

                            <div className="flex me">
                                <div> M</div>
                                <div>E</div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="flex linkContainer">
                    <div className="imgBox">
                        <img src={ServicesIcon} alt="" />
                    </div>
                    <div className="link-box">
                        <Link className="nav-link flex" to="/services">
                            <div>S</div>
                            <div>E</div>
                            <div>R</div>
                            <div>V</div>
                            <div>I</div>
                            <div>C</div>
                            <div>E</div>
                        </Link>
                    </div>
                </div>
                <div className="flex linkContainer">
                    <div className="imgBox">
                        <img src={SkillsIcon} alt="" />
                    </div>
                    <div className="link-box">
                        <Link className="nav-link flex" to="/skill">
                            <div>S</div>
                            <div>K</div>
                            <div>I</div>
                            <div>L</div>
                            <div>L</div>
                            <div>S</div>
                        </Link>
                    </div>
                </div>
                <div className="flex linkContainer">
                    <div className="imgBox">
                        <img src={PortfolioIcon} alt="" />
                    </div>
                    <div className="link-box">
                        <Link className="nav-link flex" to="/portfolio">
                            <div>P</div>
                            <div>O</div>
                            <div>R</div>
                            <div>T</div>
                            <div>F</div>
                            <div>O</div>
                            <div>L</div>
                            <div>I</div>
                            <div>O</div>
                        </Link>
                    </div>
                </div>
                <div className="flex linkContainer">
                    <div className="imgBox">
                        <img src={BlogIcon} alt="" />
                    </div>
                    <div className="link-box">
                        <Link className="nav-link flex" to="/blog">
                            <div>B</div>
                            <div>L</div>
                            <div>O</div>
                            <div>G</div>
                        </Link>
                    </div>
                </div>
                <div className="flex linkContainer">
                    <div className="imgBox">
                        <img src={ContactIcon} alt="" />
                    </div>
                    <div className="link-box">
                        <Link className="nav-link flex" to="/contact">
                            <div>C</div>
                            <div>O</div>
                            <div>N</div>
                            <div>T</div>
                            <div>A</div>
                            <div>C</div>
                            <div>T</div>
                        </Link>
                    </div>
                </div>

            </div>
        </nav>
    )
}
export default Navigation;