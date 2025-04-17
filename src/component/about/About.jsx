import { motion } from "framer-motion";
import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import ME from "../../assets/photo.png";
import classes from "./About.module.css";
// 애니메이션 변수들을 따로 분리
const floatAnimation = {
    animate: { y: [0, -10, 0] },
    transition: { duration: 2, ease: "easeInOut" },
};

const iconAnimation = {
    whileHover: { scale: 1.2 },
    whileTap: { scale: 0.9 },
};

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className={`container ${classes.about__container}`}>
                <motion.div
                    className={classes.about__me}
                    {...floatAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        hidden: { opacity: 0, x: -75 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className={classes["about__me-image"]}>
                        <img src={ME} alt="About Image" />
                    </div>
                </motion.div>
                <motion.div
                    className={classes.about__content}
                    {...floatAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        hidden: { opacity: 0, x: 75 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className={classes.about__cards}>
                        <article
                            className={classes.about__card}
                            {...iconAnimation}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <motion.div {...iconAnimation}>
                                <FaAward className={classes.about__icon} />
                            </motion.div>
                            <h5>경험</h5>
                            <small>1년 10개월+</small>
                        </article>

                        {/* 다른 아이콘들에도 동일하게 적용 가능 */}
                        <article className={classes.about__card}>
                            <motion.div {...iconAnimation}>
                                <FiUsers className={classes.about__icon} />
                            </motion.div>
                            <h5>phone</h5>
                            <small>010-4953-2679</small>
                        </article>
                    </div>

                    <div className={classes.about__content__right}>
                        {/* <p>✔️ 문제 해결력이 뛰어난 프론트엔드 개발자를 꿈꿉니다.</p>
                        <p>✔️ 기술적인 주제에 대해 글 쓰는 것을 좋아하고 잘 합니다.</p>
                        <p>✔️ 간단한 용어로 설명해 사람들이 쉽게 이해하도록 하는 것에 보람을 느낍니다.</p> */}
                        <p>
                            ✔️ 문제 해결과 구조 개선에 집중하며, 기술적인 내용을 쉽게 풀어 설명하고 정리하는 것을
                            좋아합니다.
                        </p>
                        <p>
                            ✔️ HOC를 활용한 인증처리, 코드 스플리팅, 전역 상태 모듈화 등으로 성능과 유지보수성을 개선한
                            경험이 있습니다.
                        </p>
                        <p>
                            ✔️ 커스텀 훅으로 UI와 비즈니스 로직을 분리하고, Docker와 Nginx를 활용해 직접 배포를
                            진행했었습니다.
                        </p>
                        <p>✔️ 사용자와 동료 모두가 이해하기 쉬운 코드, 명확한 책임 분리가 있는 구조를 지향합니다.</p>
                    </div>
                    <a href="#contact" className="btn btn-primary">
                        대화 해보기
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
