import React, { useRef } from "react";
import classes from "./Contact.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_ilhswda", "template_m0w846g", form.current, "HtCZV618CMB_JGPbG").then(
            (result) => {
                alert("메시지가 전달되었습니다.");
            },
            (error) => {
                alert("메시지 전달에 실패했습니다. 다시 시도해주세요.");
            }
        );
        e.target.reset();
    };

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>contact Me</h2>
            <div className={`container ${classes["contact__container"]}`}>
                <div className={classes["contact__options"]}>
                    <article className={classes.contact__option}>
                        <MdOutlineEmail className={classes["contact__option-icon"]} />
                        <h4>Email</h4>
                        <h5>7552678@naver.com</h5>
                        <a href="mailto:7552678@naver.com" target="_blank" rel="noreferrer">
                            Send a message
                        </a>
                    </article>
                    <article className={classes.contact__option}>
                        <BsTelephone className={classes["contact__option-icon"]} />
                        <h4>phone</h4>
                        <h5>01049532679</h5>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="이름" required />
                    <input type="email" name="email" placeholder="이메일" required />
                    <textarea
                        name="message"
                        id=""
                        placeholder="전달하고 싶은 메시지를 작성해주세요. 제 이메일로 전달됩니다."
                        rows="7"
                    ></textarea>
                    <button type="submit" className="btn btn-primary">
                        보내기
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
