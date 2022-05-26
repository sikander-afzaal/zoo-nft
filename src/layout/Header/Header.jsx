import React, { useState, useEffect } from "react";
import "./Header.css";
// assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link as ScrollLink } from "react-scroll";
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
    if (window.scrollY >= 200) {
      header.classList.add("black-nav");
    } else {
      header.classList.remove("black-nav");
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
          <button className="connect">Connect Wallet</button>
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
