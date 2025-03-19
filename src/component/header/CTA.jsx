import React from "react";
import CV from "../../assets/cv.pdf";
import classes from "./CTA.module.css";

const CTA = () => {
    return (
        <div className={classes.cta}>
            <a href={CV} download className="btn">
                이력서 다운 받기
            </a>
            <a href="#contact" className="btn">
                대화 해보기
            </a>
            <a href="https://github.com/yoonsooho" className="btn" target="_blank" rel="noreferrer">
                깃허브
            </a>
        </div>
    );
};

export default CTA;
