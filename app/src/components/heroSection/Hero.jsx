import React from "react";
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p className="desc">
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            SHOSE.
          </p>

          <div className="btn-group">
            <button>Shop Now</button>
            <button className="select">Category</button>
          </div>

          <div className="shop">
            <p>Also Available On</p>

            <div className="brand-icon">
              <img src="./images/flipkart.png" alt=""  />
              <img src="./images/amazon.png" alt=""  />
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src="./images/hero-image.png" alt=""  />
        </div>
      </div>
    </>
  );
};

export default Hero;
