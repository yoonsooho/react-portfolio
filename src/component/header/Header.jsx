import React from "react";
import CTA from "./CTA";
import classes from "./Header.module.css";
import HeaderSocials from "./HeaderSocials";
import { motion } from "framer-motion";

const Header = () => {
    return (
        <header>
            <div className={`container ${classes["header__container"]}`}>
                <motion.div
                    viewport={{ once: true, amount: 0.3 }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "linear" }}
                >
                    <h5>안녕하세요 제 이름은</h5>
                    <h1>윤수호입니다.</h1>
                    <h5 className={`${classes["text-light"]}`}>프론트엔드 개발자를 목표하고 있습니다.</h5>
                    <CTA />
                    <HeaderSocials />
                    {/* <div className={classes.me}></div> */}
                    <a href="#contact" className={`${classes["scroll__down"]}`}>
                        Scroll Down
                    </a>
                </motion.div>
            </div>
        </header>
    );
};

export default Header;
