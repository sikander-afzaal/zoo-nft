import React from "react";
import gal1 from "../../assets/zoo/gallery/gal (1).png";
import gal2 from "../../assets/zoo/gallery/gal (2).png";
import gal3 from "../../assets/zoo/gallery/gal (3).png";
import gal4 from "../../assets/zoo/gallery/gal (4).png";
import gal5 from "../../assets/zoo/gallery/gal (5).png";
import gal6 from "../../assets/zoo/gallery/gal (6).png";
import gal7 from "../../assets/zoo/gallery/gal (7).png";
import gal8 from "../../assets/zoo/gallery/gal (8).png";
import gal9 from "../../assets/zoo/gallery/gal (9).png";
import gal10 from "../../assets/zoo/gallery/gal (10).png";
import gal11 from "../../assets/zoo/gallery/gal (11).png";
import gal12 from "../../assets/zoo/gallery/gal (12).png";
import gal13 from "../../assets/zoo/gallery/gal (13).png";
import gal14 from "../../assets/zoo/gallery/gal (14).png";
import gal15 from "../../assets/zoo/gallery/gal (15).png";
import gal16 from "../../assets/zoo/gallery/gal (16).png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Fade from "react-reveal/Fade";
function Team() {
  return (
    <div className="cont">
      <Fade duration={1500}>
        <div id="gallery" className="team">
          <h1>Gallery</h1>
          <Splide
            options={{
              type: "loop",
              autoplay: true,
              perPage: 4,
              pauseOnHover: false,
              resetProgress: false,
              height: "auto",
              loop: true,
              width: "100%",
              gap: "5rem",
              arrows: false,
              pagination: false,
              drag: false,
              interval: "0",
              speed: "80000",
              perMove: 1,
              breakpoints: {
                966: {
                  perPage: 3,
                },
                738: {
                  perPage: 2,
                  speed: "3000",
                  interval: "4000",
                },
                460: {
                  perPage: 1,
                },
              },
            }}
          >
            <SplideSlide className="swiper-lazy">
              <img src={gal1} alt="" className="gal" />
            </SplideSlide>
            <SplideSlide className="swiper-lazy">
              <img src={gal2} alt="" className="gal" />
            </SplideSlide>
            <SplideSlide className="swiper-lazy">
              <img src={gal3} alt="" className="gal" />
            </SplideSlide>
            <SplideSlide className="swiper-lazy">
              <img src={gal4} alt="" className="gal" />
            </SplideSlide>
            <SplideSlide className="swiper-lazy">
              <img src={gal5} alt="" className="gal" />
            </SplideSlide>
            <SplideSlide className="swiper-lazy">
              <img src={gal6} alt="" className="gal" />
            </SplideSlide>
            <SplideSlide className="swiper-lazy">
              <img src={gal7} alt="" className="gal" />
            </SplideSlide>
            <SplideSlide className="swiper-lazy">
              <img src={gal8} alt="" className="gal" />
            </SplideSlide>
          </Splide>
          <Splide
            options={{
              type: "loop",
              autoplay: true,
              perPage: 4,
              pauseOnHover: false,
              resetProgress: false,
              height: "auto",
              loop: true,
              width: "100%",
              gap: "5rem",
              arrows: false,
              pagination: false,
              drag: false,
              interval: "0",
              speed: "80000",
              perMove: 1,
              direction: "rtl",
              breakpoints: {
                966: {
                  perPage: 3,
                },
                738: {
                  perPage: 2,
                  speed: "3000",
                  interval: "4000",
                },
                460: {
                  perPage: 1,
                },
              },
            }}
          >
            <SplideSlide className="swiper-lazy">
              <img src={gal9} alt="" className="gal" />
            </SplideSlide>
            <SplideSlide className="swiper-lazy">
              <img src={gal10} alt="" className="gal" />
            </SplideSlide>
            <SplideSlide className="swiper-lazy">
              <img src={gal11} alt="" className="gal" />
            </SplideSlide>
            <SplideSlide className="swiper-lazy">
              <img src={gal12} alt="" className="gal" />
            </SplideSlide>
            <SplideSlide className="swiper-lazy">
              <img src={gal13} alt="" className="gal" />
            </SplideSlide>
            <SplideSlide className="swiper-lazy">
              <img src={gal14} alt="" className="gal" />
            </SplideSlide>
            <SplideSlide className="swiper-lazy">
              <img src={gal15} alt="" className="gal" />
            </SplideSlide>
            <SplideSlide className="swiper-lazy">
              <img src={gal16} alt="" className="gal" />
            </SplideSlide>
          </Splide>
        </div>
      </Fade>
    </div>
  );
}

export default Team;
