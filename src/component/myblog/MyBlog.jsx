import React, { useState } from "react";
import classes from "./MyBlog.module.css";
import { VscFolderLibrary } from "react-icons/vsc";
import { motion } from "framer-motion";
import Modal from "../ui/Modal";

const MyBlog = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <section id="blog" className={classes.blog}>
            <h5>My Tech Journey</h5>
            <h2>개발 블로그</h2>

            <div className={`container ${classes.blog__container}`}>
                <motion.article className={classes.blog__card}>
                    <div className={classes.blog__icon}>
                        <VscFolderLibrary />
                    </div>
                    <h3>기술 블로그</h3>
                    <p>평소 공부하고 있는 내용과 새로 알게된 지식을 잊지 않기 위해 기록하는 공간입니다</p>
                    <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                        {/* <a
                            className={classes.blog__btn}
                            target="_blank"
                            href="https://perfect-volcano-440.notion.site/29c3b3d5b34846a7bf6623e535ca7b5e?pvs=4"
                            rel="noreferrer"
                        >
                            방문하기
                        </a> */}
                        <button className={classes.blog__btn} onClick={() => setIsModalOpen(true)}>
                            방문하기
                        </button>
                    </div>
                </motion.article>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div style={{ width: "100%", height: "75vh" }}>
                    <iframe
                        src="https://perfect-volcano-440.notion.site/ebd/29c3b3d5b34846a7bf6623e535ca7b5e"
                        width="100%"
                        height="100%"
                        frameborder="0"
                        allowfullscreen
                    />
                </div>
            </Modal>
        </section>
    );
};

export default MyBlog;
