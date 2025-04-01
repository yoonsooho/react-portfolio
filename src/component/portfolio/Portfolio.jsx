import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import classes from "./Portfolio.module.css";
import Modal from "../ui/Modal";

const Portfolio = (props) => {
    const [isView, setIsView] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const portfolioRef = useRef(null);
    const portfolioItemRef = useRef(null);
    const portfolioRefHeight = portfolioRef.current?.offsetTop || 0;
    const portfolioItemHeight = portfolioItemRef.current?.scrollHeight;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        const portfolioCurrentRef = portfolioRef.current;

        // 요소가 보이는지 감지하는 observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                // 요소가 보일 때 높이 측정
                if (entry.isIntersecting) {
                    setIsView(true);
                } else {
                    setIsView(false);
                }
            });
        });
        // ref가 설정된 요소 관찰 시작
        if (portfolioRef.current) {
            observer.observe(portfolioRef.current);
        }
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);

        // 클린업 함수
        return () => {
            if (portfolioCurrentRef) {
                observer.unobserve(portfolioCurrentRef);
            }
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={selectedItem?.title}>
                <div>
                    <img src={selectedItem?.image} alt={selectedItem?.title} />
                </div>
                {/* <p>{selectedItem?.review}</p> */}
            </Modal>
            <section
                id="portfolio"
                ref={portfolioRef}
                style={{
                    height: `${(props.data.length - 0.9) * 100}vh`,
                    position: "relative",
                }}
            >
                <div
                    style={{
                        position: "sticky",
                        top: 0,
                        background: "var(--color-bg)",
                        zIndex: 10,
                        padding: "2rem 0",
                    }}
                >
                    <div className={classes.portfolio__header}>
                        <h2>Portfolio</h2>
                    </div>

                    <div
                        className={`container ${classes.portfolio__container}`}
                        style={{
                            width: "100vw",
                            height: "70vh",
                            transform:
                                isView && portfolioRefHeight
                                    ? `translateX(-${
                                          Math.min(
                                              props.data.length - 1,
                                              (scrollPosition - portfolioRefHeight) / portfolioItemHeight
                                          ) * 100
                                      }%)`
                                    : "translateX(0%)",
                        }}
                        ref={portfolioItemRef}
                    >
                        {props.data.map((item, i) => {
                            return (
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={props.sectionVariants}
                                    viewport={{ amount: 0.3 }}
                                    key={item.id}
                                    style={{
                                        width: "100vw",
                                        paddingRight: "12.5vw",
                                        paddingLeft: "12.5vw",
                                        cursor: "pointer",
                                    }}
                                >
                                    <motion.article style={{ width: "75vw" }} className={classes["portfolio__item"]}>
                                        <div
                                            className={classes["portfolio__item-image"]}
                                            onClick={() => {
                                                setSelectedItem(item);
                                                setIsModalOpen(true);
                                            }}
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.image}
                                                style={{ height: "400px", objectFit: "cover" }}
                                            />
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p style={{ marginBottom: "1rem", whiteSpace: "pre-wrap" }}>{item.review}</p>
                                        <div className={classes["portfolio__item-cta"]}>
                                            {item?.github !== "" && (
                                                <a
                                                    href={item?.github}
                                                    className="btn"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Github
                                                </a>
                                            )}
                                            {item?.demo && (
                                                <a
                                                    href={item?.demo}
                                                    className="btn btn-primary"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    사이트 이동
                                                </a>
                                            )}
                                            {item?.appDemo && (
                                                <a
                                                    href={item?.appDemo}
                                                    className="btn btn-primary"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    스토어 이동
                                                </a>
                                            )}
                                            {item?.descriptionUrl && (
                                                <a
                                                    href={item?.descriptionUrl}
                                                    className="btn btn-primary"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    상세 설명
                                                </a>
                                            )}
                                        </div>
                                    </motion.article>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Portfolio;
