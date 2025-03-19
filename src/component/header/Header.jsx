import { motion } from "framer-motion";
import React from "react";
import CTA from "./CTA";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <header id="home">
            <div className={`container ${classes["header__container"]}`}>
                <motion.div
                    viewport={{ once: true, amount: 0.3 }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "linear" }}
                >
                    <div className={classes.header__content}>
                        <h5>안녕하세요 제 이름은</h5>
                        <h1>윤수호입니다.</h1>
                        <h5 className={`${classes["text-light"]}`}>
                            프론트엔드 경력 1년 10개월 되었으며, 사용자 경험을 중요하게 생각하는 프론트엔드
                            개발자입니다.
                        </h5>
                    </div>
                    <CTA />
                </motion.div>
            </div>
        </header>
    );
};

export default Header;
