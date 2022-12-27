import React from "react"
import classes from "./About.module.css"
import ME from "../../assets/photo.png"
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className={`container ${classes.about__container}`}>
        <div className={classes.about__me}>
          <div className={classes["about__me-image"]}>
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className={classes.about__content}>
          <div className={classes.about__cards}>
            <article className={classes.about__card}>
              <FaAward className={classes.about__icon} />
              <h5>경험</h5>
              <small>퍼블리셔 교육과 프론트엔드 교육을 받은 경험이 있습니다.</small>
            </article>
            <article className={classes.about__card}>
              <FiUsers className={classes.about__icon} />
              <h5>Clients</h5>
              <small>아직 없습니다.</small>
            </article>
            <article className={classes.about__card}>
              <VscFolderLibrary className={classes.about__icon} />
              <h5>projects</h5>
              <small>
                개인 프로젝트와 협업 프로젝트를 합쳐 5개 이상의 프로젝트 경험이 있습니다.
              </small>
            </article>
          </div>
          <p>
            프론트엔드 개발자가 되기 위해 퍼블리셔와 프론트엔드 개발 교육을 받았으며 다양한
            프로젝트와 여러 사람들과 협업을 한 경험이 있으며 백엔드에도 관심이 많습니다.
          </p>
          <a href="#contact" className="btn btn-primary">
            대화 해보기
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
