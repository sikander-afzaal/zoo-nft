import React, { useState, useEffect } from "react";
import "./Header.css";
// assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link as ScrollLink } from "react-scroll";
import logo from "../../assets/images/logo.png";
const Header = () => {
  const [open, setOpen] = useState(false);
  const openFunc = (e) => {
    setOpen((prev) => !prev);
    const header = document.querySelector(".header");
    if (!open === true) {
      header.classList.add("overflow");
    } else {
      setTimeout(() => {
        header.classList.remove("overflow");
      }, 300);
    }
  };
  const changeBackground = () => {
    const header = document.querySelector(".header");
    const logo = document.querySelector(".head-logo");
    if (window.scrollY >= 200) {
      header.classList.add("black-nav");
      logo.classList.add("show-logo");
    } else {
      header.classList.remove("black-nav");
      logo.classList.remove("show-logo");
    }
  };
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <>
      <header className={`header `}>
        <div className="h_container">
          <img src={logo} alt="" className="head-logo" />
          <div className={`nav_ul ${open ? "open-nav" : ""}`}>
            <ScrollLink
              spy={true}
              activeClass="active-nav"
              onClick={openFunc}
              to="home"
              offset={-150}
            >
              Home
            </ScrollLink>

            <ScrollLink
              spy={true}
              activeClass="active-nav"
              onClick={openFunc}
              to="road"
              offset={-250}
            >
              Roadmap
            </ScrollLink>
            <ScrollLink
              spy={true}
              activeClass="active-nav"
              onClick={openFunc}
              to="gallery"
              offset={-250}
            >
              Gallery
            </ScrollLink>
            <ScrollLink
              spy={true}
              activeClass="active-nav"
              onClick={openFunc}
              to="faq"
              offset={-250}
            >
              Faq
            </ScrollLink>
          </div>
          <FontAwesomeIcon
            onClick={openFunc}
            className="hamburger"
            icon={open ? faXmark : faBars}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
