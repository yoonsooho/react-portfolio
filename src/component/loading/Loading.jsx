import React from "react";
import { motion } from "framer-motion";
import classes from "./Loading.module.css";

const Loading = () => {
    return (
        <div className={classes.loadingContainer}>
            <motion.div
                className={classes.content}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <p>안녕하세요. 더 나은 개발자가 되기 위해 노력하는 윤수호입니다.</p>

                <motion.div className={classes.loadingCircleContainer}>
                    {[1, 2, 3, 4, 5].map((_, index) => (
                        <motion.span
                            key={index}
                            className={classes.loadingCircle}
                            animate={{
                                y: ["0%", "100%", "0%"],
                            }}
                            transition={{
                                duration: 1.2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: index * 0.1,
                            }}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Loading;
