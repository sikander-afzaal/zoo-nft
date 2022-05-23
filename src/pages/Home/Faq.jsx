import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare,
  faMinusSquare,
} from "@fortawesome/free-regular-svg-icons";
function Faq() {
  // if you want to add more questions just add another false here or vice versa
  const [open, setOpen] = useState([false, false, false, false, false]);

  //function to check which faq is opened
  const clickHandler = (e) => {
    const num = e.target.dataset.num;
    setOpen((prev) => {
      let arr = [...prev];
      let newArr = arr.map((elem, index) => {
        if (index == num) {
          return !elem;
        } else {
          return elem;
        }
      });
      return newArr;
    });
  };
  return (
    <div id="faq" className="faq">
      <Fade top duration={1500}>
        <div className="heading-div">
          <h1 className="small">FAQs</h1>
        </div>
      </Fade>

      <div className="faq-div">
        <Rotate bottom left duration={1200} delay={100}>
          <div className="faq-q-div">
            <div
              data-num={0}
              onClick={clickHandler}
              className={`faq-btn ${open[0] ? "border-radius" : ""}`}
            >
              <p className={`${open[0] ? "active-btn" : ""}`}>
                01. When is the release date?
              </p>
              {open[0] ? (
                <FontAwesomeIcon
                  className={`${open[0] ? "active-btn" : ""}`}
                  icon={faMinusSquare}
                />
              ) : (
                <FontAwesomeIcon icon={faPlusSquare} />
              )}
            </div>
            <div className={`faq-answer ${open[0] ? "active" : ""}`}>
              <p className="answer">
                We at NFZ are working hard to make sure our systems are in place
                to support a major release. We anticipate the release to happen
                in Q2 of 2022. Join our discord, twitter, or provide us your
                email below to receive updates.
              </p>
            </div>
          </div>
        </Rotate>
        <Rotate bottom left duration={1200} delay={500}>
          {" "}
          <div className="faq-q-div">
            <div
              data-num={1}
              onClick={clickHandler}
              className={`faq-btn ${open[1] ? "border-radius" : ""}`}
            >
              <p className={`${open[1] ? "active-btn" : ""}`}>
                02. What zoos are part of the program?
              </p>
              {open[1] ? (
                <FontAwesomeIcon
                  className={`${open[1] ? "active-btn" : ""}`}
                  icon={faMinusSquare}
                />
              ) : (
                <FontAwesomeIcon icon={faPlusSquare} />
              )}
            </div>
            <div className={`faq-answer ${open[1] ? "active" : ""}`}>
              <p className="answer">
                We will only be working with Accredited Zoos and Aquariums so
                the list will be roughly 400 in the U.S. <br />
                Based on the number of NFTS sold during the launch we will plan
                our zoo acquisition after that. Zoos want to know how many
                passes we sold and what the payback looks like for them. The
                plan is to release the U.S. based zoos at the end of Q2 or start
                of Q3.
              </p>
            </div>
          </div>
        </Rotate>
        <Rotate bottom left duration={1200} delay={1000}>
          {" "}
          <div className="faq-q-div">
            <div
              data-num={2}
              onClick={clickHandler}
              className={`faq-btn ${open[2] ? "border-radius" : ""}`}
            >
              <p className={`${open[2] ? "active-btn" : ""}`}>
                03. Can I pre-order or get on a waitlist?
              </p>
              {open[2] ? (
                <FontAwesomeIcon
                  className={`${open[2] ? "active-btn" : ""}`}
                  icon={faMinusSquare}
                />
              ) : (
                <FontAwesomeIcon icon={faPlusSquare} />
              )}
            </div>
            <div className={`faq-answer ${open[2] ? "active" : ""}`}>
              <p className="answer">
                At this time we don't have a waitlist but we will be giving away
                10 free NFTS for engagement and for people inviting or sharing
                on our Twitter feed so stay tuned for those giveaways.
              </p>
            </div>
          </div>
        </Rotate>
        <Rotate bottom left duration={1200} delay={1200}>
          {" "}
          <div className="faq-q-div">
            <div
              data-num={3}
              onClick={clickHandler}
              className={`faq-btn ${open[3] ? "border-radius" : ""}`}
            >
              <p className={`${open[3] ? "active-btn" : ""}`}>
                04. Where will the launch be hosted and what Crypto is being
                used?
              </p>
              {open[3] ? (
                <FontAwesomeIcon
                  className={`${open[3] ? "active-btn" : ""}`}
                  icon={faMinusSquare}
                />
              ) : (
                <FontAwesomeIcon icon={faPlusSquare} />
              )}
            </div>
            <div className={`faq-answer ${open[3] ? "active" : ""}`}>
              <p className="answer">
                Our plan is to release on the Crypto.com/nft site and will plan
                to use their CRO token. We also plan to allow purchases through
                USD bank or credit card purchases.
              </p>
            </div>
          </div>
        </Rotate>
        <Rotate bottom left duration={1000} delay={1300}>
          {" "}
          <div className="faq-q-div">
            <div
              data-num={3}
              onClick={clickHandler}
              className={`faq-btn ${open[3] ? "border-radius" : ""}`}
            >
              <p className={`${open[3] ? "active-btn" : ""}`}>
                05. How do I claim this at the zoo?
              </p>
              {open[3] ? (
                <FontAwesomeIcon
                  className={`${open[3] ? "active-btn" : ""}`}
                  icon={faMinusSquare}
                />
              ) : (
                <FontAwesomeIcon icon={faPlusSquare} />
              )}
            </div>
            <div className={`faq-answer ${open[3] ? "active" : ""}`}>
              <p className="answer">
                After you purchase your NFT you will want to store it in your
                crypto.com wallet and be ready to show it when you get to the
                zoo. The zoo will have a way to authenticate that is the real
                NFT and not a scan or a copy.
              </p>
            </div>
          </div>
        </Rotate>

        {
          // when you add a new faq make sure to increment the value in the brackets
        }
      </div>
    </div>
  );
}

export default Faq;
