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
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // 요소가 보일 때 높이 측정
                    if (entry.isIntersecting) {
                        setIsView(true);
                    } else {
                        setIsView(false);
                    }
                });
            },
            {
                threshold: 0.1, // 10% 이상 보일 때 감지
            }
        );
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

    // console.log("요소의 높이:", elementHeight);
    // console.log("portfolioItemHeight:", portfolioItemHeight);

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
                        transform: isView
                            ? `translateX(-${((scrollPosition - portfolioRefHeight) / portfolioItemHeight) * 100}%)`
                            : "translateX(0%)",
                    }}
                    ref={portfolioItemRef}
                >
                    {props.data.map((item, i) => {
                        return (
                            <div
                                key={item.id}
                                style={{
                                    width: "100vw",
                                    paddingRight: "12.5vw",
                                    paddingLeft: "12.5vw",
                                }}
                            >
                                <motion.article style={{ width: "75vw" }} className={classes["portfolio__item"]}>
                                    <div className={classes["portfolio__item-image"]}>
                                        <img
                                            src={item.image}
                                            alt={item.image}
                                            style={{ width: "75vw", height: "400px" }}
                                        />
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
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
