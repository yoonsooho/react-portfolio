import React from "react"
import classes from "./Experience.module.css"
import { BsPatchCheckFill } from "react-icons/bs"

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skill</h5>
      <h2>My Experience</h2>

      <div className={`container ${classes["experience__container"]}`}>
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className={classes["experience__content"]}>
            <article className={classes["experience__details"]}>
              <BsPatchCheckFill className={classes["experience__details-icon"]} />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className={classes["experience__details"]}>
              <BsPatchCheckFill className={classes["experience__details-icon"]} />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className={classes["experience__details"]}>
              <BsPatchCheckFill className={classes["experience__details-icon"]} />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className={classes["experience__details"]}>
              <BsPatchCheckFill className={classes["experience__details-icon"]} />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className={classes["experience__details"]}>
              <BsPatchCheckFill className={classes["experience__details-icon"]} />
              <div>
                <h4>Redux-toolkit</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
