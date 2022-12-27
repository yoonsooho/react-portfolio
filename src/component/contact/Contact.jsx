import React, { useRef } from "react"
import classes from "./Contact.module.css"
import { MdOutlineEmail } from "react-icons/md"
import { BsTelephone } from "react-icons/bs"

import emailjs from "@emailjs/browser"

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm("service_ilhswda", "template_m0w846g", form.current, "HtCZV618CMB_JGPbG").then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )
    e.target.reset()
  }

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
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="name" placeholder="Your Email" required />
          <textarea name="message" id="" placeholder="Your Message" rows="7"></textarea>
          <button type="submit" className="btn btn-primary">
            send message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
