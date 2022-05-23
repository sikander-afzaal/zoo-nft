import React from "react";
import "./Footer.css";
import logo from "../../assets/images/foot-logo.png";
import discord from "../../assets/icons/discord-grey.svg";
import twitter from "../../assets/icons/twitter-grey.svg";
import circles from "../../assets/icons/circles-grey.svg";
import Fade from "react-reveal/Fade";
function Footer() {
  return (
    <Fade bottom>
      <div className="footer">
        <div className="logo-div">
          <img src={logo} alt="" />
        </div>
        <h1>Join The Community</h1>
        <div className="social-div">
          <a target={"blank"} href="https://discord.gg/thorfinancial">
            <img src={discord} alt="..." />
          </a>
          <a target={"blank"} href="https://twitter.com/GodsofAsgardP2E">
            <img src={twitter} alt="..." />
          </a>
          <a target={"blank"} href="https://thornodes.medium.com/">
            <img src={circles} alt="..." />
          </a>
        </div>
        <h2>
          ©Gods of Asgard{" "}
          <a target={"blank"} href="https://thor.financial/">
            {" "}
            Powered by Thor Financial
          </a>
          . All rights served.
        </h2>
      </div>
    </Fade>
  );
}

export default Footer;
