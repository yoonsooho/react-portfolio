import React from "react"
import CTA from "./CTA"
import classes from "./Header.module.css"
import HeaderSocials from "./HeaderSocials"

const Header = () => {
  return (
    <header>
      <div className={`container ${classes["header__container"]}`}>
        <h5>안녕하세요 제 이름은</h5>
        <h1>윤수호입니다.</h1>
        <h5 className={`${classes["text-light"]}`}>프론트엔드 개발자를 목표하고 있습니다.</h5>
        <CTA></CTA>
        <HeaderSocials />
        <div className={classes.me}></div>
        <a href="#contact" className={`${classes["scroll__down"]}`}>
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header
