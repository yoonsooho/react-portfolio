import React from "react";
import classes from "./Footer.module.css";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
    return (
        <footer>
            <a href="#" className={classes.footer__logo}>
                Yoonsooho
            </a>
            <ul className={classes.permalinks}>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">experience</a>
                </li>
                <li>
                    <a href="#Services">Services</a>
                </li>
                <li>
                    <a href="#portfolio">portfolio</a>
                </li>
                <li>
                    <a href="#Testimonials">Testimonials</a>
                </li>
                <li>
                    <a href="#Contact">Contact</a>
                </li>
            </ul>
            <div className={classes.footer__socials}>
                <a href="http://facebook.com">
                    <FaFacebook />
                </a>
                <a href="http://instagram.com">
                    <FiInstagram />
                </a>
                <a href="http://twitter.com">
                    <IoLogoTwitter />
                </a>
            </div>
            <div className={classes.footer__copyright}>
                <small>&copy; yoonsooho portfolio</small>
            </div>
        </footer>
    );
};

export default Footer;
