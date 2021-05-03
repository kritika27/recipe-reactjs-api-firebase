import React from "react";
import { Link } from "react-router-dom";
import heroimg from "../../images/undraw_breakfast_psiw.svg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <img src={heroimg} alt="breakfast" />
      <div className="content">
        <h1>
          Bring <span>spice</span> to your life
        </h1>
        <p className="description">
          The food reflects emotion! Here are some classic recipes from all over
          the world.
        </p>
        <Link to="/recipe">
          <button className="btn-order">Browse Recipes</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
