import React from "react";
import classes from "./About.module.css";
import ME from "../../assets/photo.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className={`container ${classes.about__container}`}>
                <div className={classes.about__me}>
                    <div className={classes["about__me-image"]}>
                        <img src={ME} alt="About" />
                    </div>
                </div>
                <div className={classes.about__content}>
                    <div className={classes.about__cards}>
                        <article className={classes.about__card}>
                            <FaAward className={classes.about__icon} />
                            <h5>Email</h5>
                            <small>7552678@naver.com</small>
                        </article>
                        <article className={classes.about__card}>
                            <FiUsers className={classes.about__icon} />
                            <h5>phone</h5>
                            <small>010-4953-2679</small>
                        </article>
                        <article className={classes.about__card}>
                            <VscFolderLibrary className={classes.about__icon} />
                            <h5>블로그</h5>
                            <a
                                target="_blank"
                                href="https://perfect-volcano-440.notion.site/29c3b3d5b34846a7bf6623e535ca7b5e?pvs=4"
                                rel="noreferrer"
                            >
                                블로그 이동
                            </a>
                        </article>
                    </div>
                    <div className={classes.about__content__right}>
                        <p>✔️ 문제 해결력이 뛰어난 프론트엔드 개발자를 꿈꿉니다. </p>
                        <p>✔️ 기술적인 주제에 대해 글 쓰는 것을 좋아하고 잘 합니다. </p>
                        <p>✔️ 간단한 용어로 설명해 사람들이 쉽게 이해하도록 하는 것에 보람을 느낍니다.</p>
                    </div>
                    <a href="#contact" className="btn btn-primary">
                        대화 해보기
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
