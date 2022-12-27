import React from "react"
import { BsGithub } from "react-icons/bs"
import { ImBlogger } from "react-icons/im"
import classes from "./HeaderSocials.module.css"

const HeaderSocials = () => {
  return (
    <div className={classes.header__socials}>
      <a href="https://github.com/yoonsooho" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://velog.io/@yoonsooho" target="_blank" rel="noreferrer">
        <ImBlogger />
      </a>
    </div>
  )
}

export default HeaderSocials
