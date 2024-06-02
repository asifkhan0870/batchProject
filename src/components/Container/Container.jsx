import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

import "./Container.css";

const Container = () => {
  return (
    <div className="c-wrapper">
      <div className="c-left">
        <div className="orange-circle" />
        <div className="c-text-primary">
          <h1>
            Make The Best <br /> Financial Decisions
          </h1>
        </div>

        <div className="c-text-secondary">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            saepe iste excepturi doloremque iure optio nemo quaerat aperiam
            inventore! Voluptas, voluptatem quas?
          </span>
        </div>

        <div className="c-navigation">
          <div className="c-navigation-left">
            <button className="c-btn">Get Started</button>
            <FaArrowRightLong />
          </div>

          <div className="c-navigation-right">
            <div>
              <MdOutlineSlowMotionVideo size={30} />
            </div>
            <span>Watch Video</span>
          </div>
        </div>

        <div className="c-last-img">
          <img src="./leftimg.png" alt="" />
        </div>
      </div>

      <div className="c-right">
        <div className="right-orange-circle" />
        <div className=" c-image c-first">
          <img src="./iPhone-13-first.png" alt="" />
        </div>

        <div className="c-image c-second">
          <img src="./iPhone-13-second.png" alt="" />
        </div>

        <div className="c-image c-third">
          <img src="./iPhone-13-third.png" alt="" />
        </div>

        <div className="c-image c-fourth">
          <img src="./spiral.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Container;
