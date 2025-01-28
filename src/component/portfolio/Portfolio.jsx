import React from "react";
import classes from "./Portfolio.module.css";
import { motion } from "framer-motion";

const Portfolio = (props) => {
    return (
        <section id="portfolio">
            <h5>My Recent Word</h5>
            <h2>Portfolio</h2>

            <div className={`container ${classes.portfolio__container}`}>
                {props.data.map((item, i) => {
                    return (
                        <motion.article
                            key={item.id}
                            className={classes["portfolio__item"]}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className={classes["portfolio__item-image"]}>
                                <img src={item.image} alt={item.image} />
                            </div>
                            <h3>{item.title}</h3>
                            <div className={classes["portfolio__item-cta"]}>
                                {item.github !== "" && (
                                    <a href={item.github} className="btn" target="_blank" rel="noopener noreferrer">
                                        Github
                                    </a>
                                )}
                                <a
                                    href={item.demo}
                                    className="btn btn-primary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Live Demo
                                </a>
                                <a
                                    href={item.descriptionUrl}
                                    className="btn btn-primary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Description
                                </a>
                            </div>
                        </motion.article>
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio;
