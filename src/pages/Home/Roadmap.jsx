import React from "react";
import hammer from "../../assets/icons/hammer.png";
import Fade from "react-reveal/Fade";
function Roadmap() {
  let Thorhammer = React.useRef();
  let lineRef = React.useRef();

  let box = React.useRef();
  let box2 = React.useRef();
  let box3 = React.useRef();
  let box4 = React.useRef();
  let box5 = React.useRef();
  let box6 = React.useRef();
  let box7 = React.useRef();

  React.useEffect(() => {
    const handler = () => {};
    document.addEventListener("scroll", handler);

    return () => {
      document.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div id="road" className="roadmap-wrapper">
      <div className="container-wrapper">
        <div className="roadmap">
          <Fade top>
            <h1 className="main-head">Roadmap</h1>
          </Fade>
          <div className="roadmap-content-wrapper">
            <div className="roadmap-content" ref={lineRef}>
              <div className="roadmap-box bot" ref={Thorhammer}>
                <div className="hammer">
                  <div className="road-blob"></div>
                </div>
              </div>
              <Fade>
                <div className="roadmap-box" ref={box}>
                  <div className="roadmap-box-content left">
                    <div className="top-road">
                      <h1 className="">Q1-Q2 2022</h1>
                    </div>
                    <div className="right-box">
                      <h2>Develop NFT Verification Process</h2>
                      <p>Build a way for Zoos to verify NFTs onsite.</p>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade delay={200}>
                <div className="roadmap-box" ref={box2}>
                  <div className="roadmap-box-content right">
                    <div className="top-road">
                      <h1 className="">Q2 2022</h1>
                    </div>
                    <div className="right-box">
                      <h2>Design NFTs</h2>
                      <p>Design 100,000 Unique Zoo NFTs.</p>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade delay={400}>
                <div className="roadmap-box" ref={box3}>
                  <div className="roadmap-box-content left">
                    <div className="top-road">
                      <h1 className="">Q3 2022</h1>
                    </div>
                    <div className="right-box">
                      <h2>Launch 2,000 VIP Whitelist</h2>
                      <p>
                        Be one of the first to gain access to NFZ NFTs through
                        our VIP Whitelist
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade delay={600}>
                <div className="roadmap-box" ref={box4}>
                  <div className="roadmap-box-content right">
                    <div className="top-road">
                      <h1 className="">Q3 2022</h1>
                    </div>
                    <div className="right-box">
                      <h2>Zoo List Release</h2>
                      <p>
                        Launch access to 200 plus accredited zoo partners the
                        US.
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade delay={700}>
                <div className="roadmap-box" ref={box5}>
                  <div className="roadmap-box-content left">
                    <div className="top-road">
                      <h1 className="">Q4 2022</h1>
                    </div>
                    <div className="right-box">
                      <h2>100k NFT Release.</h2>
                      <p>General public launch of NFZ NFTs</p>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade delay={800}>
                <div className="roadmap-box" ref={box6}>
                  <div className="roadmap-box-content right">
                    <div className="top-road">
                      <h1 className="">Q4 2022</h1>
                    </div>
                    <div className="right-box">
                      <h2>Launch International NFTs</h2>
                      <p>
                        Drop 300k more NFTs internationally with access to an
                        additional 1,000 zoos.
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade delay={900}>
                <div className="roadmap-box" ref={box7}>
                  <div className="roadmap-box-content left">
                    <div className="top-road">
                      <h1 className="">Q2 2023</h1>
                    </div>
                    <div className="right-box">
                      <h2>Zoo VR in the Metaverse</h2>
                      <p>
                        How cool would it be if you could visit your favorite
                        zoo through virtual reality?
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
