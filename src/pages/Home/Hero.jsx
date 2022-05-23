import React from "react";
// assets
import vid from "../../assets/zoo/background sample.mp4";
import parrot from "../../assets/zoo/road/parrot.jpg";
import Fade from "react-reveal/Fade";
const Hero = () => {
  return (
    <>
      <div id="home" className="hero">
        <video className="vid" src={vid} autoPlay muted loop />
        <div className="overlay"></div>
        <Fade bottom big cascade>
          <div className="hero_container">
            <h1>The Zoo NFZ is a lifestyle</h1>
            <p>
              With an initial collection of 2,000 VIP tokens, these NFTs are
              redefining how investors, enthusiasts, casual visitors...
              worldwide... experience zoo access. Owners of these NFTs will be
              able to have lifetime access for them and their family to any of
              the zoos in our network.
            </p>
            <p>We’re redefining the experience.</p>
            <p>
              The early adopters of NFZ will be provided with the first of the
              awesome benefits for becoming part of the NFZoo Family:
            </p>
            <ul>
              <li>Experience voting rights on future activities at NFZ!</li>
              <li>
                VIP Access to special behind the scenes visits and events at
                partnered zoos.
              </li>
              <li>
                Royalties paid out quarterly to you on all re-sale of the NFTs
                for 3 years!
              </li>
              <li>Other unique offerings within the NFZverse.</li>
            </ul>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Hero;
