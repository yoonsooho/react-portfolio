import { motion } from "framer-motion";
import React from "react";
import CTA from "./CTA";
import classes from "./Header.module.css";

const textReveal = {
    initial: {
        y: "200%",
        opacity: 0,
    },
    animate: {
        y: "0%",
        opacity: 1,
    },
};
const transition = {
    duration: 0.6,
    ease: [0.6, -0.05, 0.01, 0.9],
};

const Header = () => {
    return (
        <header id="home">
            <div className={`container ${classes["header__container"]}`}>
                <motion.div>
                    <div className={classes.header__content}>
                        <motion.h5
                            variants={textReveal}
                            initial="initial"
                            animate="animate"
                            transition={{
                                ...transition,
                                delay: 0.1, // 첫 번째 텍스트
                            }}
                        >
                            안녕하세요 저는 웹개발자
                        </motion.h5>
                        <motion.h1
                            variants={textReveal}
                            initial="initial"
                            animate="animate"
                            transition={{
                                ...transition,
                                delay: 0.4, // 첫 번째 텍스트
                            }}
                        >
                            윤수호입니다.
                        </motion.h1>
                        <motion.h5
                            variants={textReveal}
                            initial="initial"
                            animate="animate"
                            transition={{
                                ...transition,
                                delay: 0.7, // 세 번째 텍스트
                            }}
                        >
                            사용자 경험을 중요하게 생각하며 유저와 소통하며 웹을 만들어 나가는 매력에 빠져 프론트엔드
                            개발자로 일하고 있으며,
                        </motion.h5>
                        <motion.h5
                            className={`${classes["text-light"]}`}
                            variants={textReveal}
                            initial="initial"
                            animate="animate"
                            transition={{
                                ...transition,
                                delay: 1.0, // 네 번째 텍스트
                            }}
                        >
                            프론트엔드 개발자로 경력 1년 10개월 되었습니다.
                        </motion.h5>
                    </div>
                    <motion.div
                        variants={textReveal}
                        initial="initial"
                        animate="animate"
                        transition={{
                            ...transition,
                            delay: 1.3, // 첫 번째 텍스트
                        }}
                    >
                        <CTA />
                    </motion.div>
                </motion.div>
            </div>
        </header>
    );
};

export default Header;
