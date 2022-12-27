import React, { useState } from "react"
import { AiOutlineHome } from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai"
import { BiBook } from "react-icons/bi"
import { RiServiceLine } from "react-icons/ri"
import { BiMessageDetail } from "react-icons/bi"
import classes from "./Nav.module.css"

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a
        href="#"
        onClick={() => {
          setActiveNav("#")
        }}
        className={` '' ${activeNav === "#" ? classes.active : ""}`}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => {
          setActiveNav("#about")
        }}
        className={`${activeNav === "#about" ? classes.active : ""}`}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => {
          setActiveNav("#experience")
        }}
        className={` '' ${activeNav === "#experience" ? classes.active : ""}`}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => {
          setActiveNav("#services")
        }}
        className={` '' ${activeNav === "#services" ? classes.active : ""}`}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => {
          setActiveNav("#contact")
        }}
        className={` '' ${activeNav === "#contact" ? classes.active : ""}`}
      >
        <BiMessageDetail />
      </a>
    </nav>
  )
}

export default Nav
