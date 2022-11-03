import React, { useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import './index.css';

const Navbar = () => {
    useEffect(() => {
        scroll.scrollToTop();
    }, [])
    return (
        <>
            <nav className="nav">
                <div id="leftStuff">
                    <p onClick={() => {
                        scroll.scrollToTop();
                    }} id="my-name">Divyam Khatri</p>
                </div>

                <ul className="nav-links">
                    <li className="nav-item">
                        <Link activeClass="active" smooth spy offset={-70} duration={1000} to="about">
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link activeClass="active" smooth spy offset={-70} duration={1000} to="projects">
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link activeClass="active" smooth spy offset={-70} duration={1000} to="resume">
                            Resume
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link activeClass="active" smooth spy offset={-70} duration={1000} to="contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>

        </>
    )
}

export default Navbar;