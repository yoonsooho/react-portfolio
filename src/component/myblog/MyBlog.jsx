import React from "react";
import classes from "./MyBlog.module.css";
import { VscFolderLibrary } from "react-icons/vsc";
import { motion } from "framer-motion";

const MyBlog = () => {
    return (
        <section id="blog" className={classes.blog}>
            <h5>My Tech Journey</h5>
            <h2>개발 블로그</h2>

            <div className={`container ${classes.blog__container}`}>
                <motion.article
                    className={classes.blog__card}
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <div className={classes.blog__icon}>
                        <VscFolderLibrary />
                    </div>
                    <h3>기술 블로그</h3>
                    <p>개발 경험과 학습 내용을 기록하는 공간입니다</p>
                    <a
                        className={classes.blog__btn}
                        target="_blank"
                        href="https://perfect-volcano-440.notion.site/29c3b3d5b34846a7bf6623e535ca7b5e?pvs=4"
                        rel="noreferrer"
                    >
                        방문하기
                    </a>
                </motion.article>
            </div>
        </section>
    );
};

export default MyBlog;
