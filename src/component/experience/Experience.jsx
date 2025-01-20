import React from "react";
import classes from "./Experience.module.css";
import { BsPatchCheckFill } from "react-icons/bs";

const data = [
    {
        id: Math.random(),
        content: "Javascript",
    },
    {
        id: Math.random(),
        content: "Typescript",
    },
    {
        id: Math.random(),
        content: "React",
    },
    {
        id: Math.random(),
        content: "Next.js",
    },
    {
        id: Math.random(),
        content: "Redux-toolkit",
    },
    {
        id: Math.random(),
        content: "zustand",
    },
    {
        id: Math.random(),
        content: "Tanstack Query",
    },
    {
        id: Math.random(),
        content: "Tailwind",
    },
    {
        id: Math.random(),
        content: "Styled-component",
    },
];

const Experience = () => {
    return (
        <section id="experience">
            <h5>Skill</h5>
            <h2>My Experience</h2>

            <div className={`container ${classes["experience__container"]}`}>
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className={classes["experience__content"]}>
                        {data.map((item) => {
                            return (
                                <article className={classes["experience__details"]} key={item.id}>
                                    <BsPatchCheckFill className={classes["experience__details-icon"]} />
                                    <div>
                                        <h4>{item.content}</h4>
                                        <small className="text-light">Experienced</small>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
