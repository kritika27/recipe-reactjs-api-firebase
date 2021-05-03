import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Recipe.css";

const Recipe = React.memo(function Recipe({ image, name, id }) {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img
          src={
            image ||
            "https://i.ibb.co/KFpCKPb/anna-pelzer-IGf-IGP5-ONV0-unsplash.jpg"
          }
          alt={name || "Green Salad"}
        />
      </div>
      <div className="cocktail-footer">
        <h2>{name || "Green Salad"}</h2>
        <Link to={`/recipe/${id}`} style={{ color: "#444" }}>
          <h4>
            Check out the recipe <i className="fa fa-arrow-right"></i>
          </h4>
        </Link>
      </div>
    </article>
  );
});

Recipe.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default Recipe;
