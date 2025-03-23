import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import classes from "./Portfolio.module.css";

const Portfolio = (props) => {
    const [isView, setIsView] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const portfolioRef = useRef(null);
    const portfolioItemRef = useRef(null);
    const portfolioRefHeight = portfolioRef.current?.offsetTop || 0;
    const portfolioItemHeight = portfolioItemRef.current?.scrollHeight;

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
        <section
            id="portfolio"
            ref={portfolioRef}
            style={{
                height: `${(props.data.length - 0.5) * 100}vh`,
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
                                }}
                            >
                                <motion.article
                                    style={{ width: "75vw" }}
                                    className={classes["portfolio__item"]}
                                    // viewport={{ once: true, amount: 0.3 }}
                                    // initial={{ opacity: 0, y: 30 }}
                                    // whileInView={{ opacity: 1, y: 0 }}
                                    // transition={{
                                    //     opacity: { duration: 0, delay: i * 0.2 },
                                    //     y: { duration: 0.2, delay: 0.2 },
                                    // }}
                                >
                                    <div className={classes["portfolio__item-image"]}>
                                        <img src={item.image} alt={item.image} style={{ height: "400px" }} />
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p style={{ marginBottom: "1rem" }}>{item.review}</p>
                                    <div className={classes["portfolio__item-cta"]}>
                                        {item.github !== "" && (
                                            <a
                                                href={item.github}
                                                className="btn"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Github
                                            </a>
                                        )}
                                        <a
                                            href={item.demo}
                                            className="btn btn-primary"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            사이트 이동
                                        </a>
                                        <a
                                            href={item.descriptionUrl}
                                            className="btn btn-primary"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            상세 설명
                                        </a>
                                    </div>
                                </motion.article>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
