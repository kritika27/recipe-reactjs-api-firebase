import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import "./SingleRecipe.css";

export default function SingleRecipe() {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);

  const [recipes, setRecipes] = useState([]);

  React.useEffect(() => {
    setLoading(true);
    async function getRecipe() {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();

        if (data.meals) {
          const {
            strMeal: name,
            strMealThumb: image,
            strCategory: category,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
            strIngredient11,
            strIngredient12,
            strIngredient13,
            strIngredient14,
            strIngredient15,
            strInstructions: instructions,
          } = data.meals[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
            strIngredient11,
            strIngredient12,
            strIngredient13,
            strIngredient14,
            strIngredient15,
          ];
          const newRecipe = {
            name,
            image,
            category,
            ingredients,
            instructions,
          };
          setRecipes(newRecipe);
        } else {
          setRecipes(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getRecipe();
  }, [id]);
  if (loading) {
    return <Spinner />;
  }
  if (!recipes) {
    return <h2 className="section-title">No recipe to display.</h2>;
  } else {
    const { name, image, category, ingredients, instructions } = recipes;

    return (
      <div className="recipe_container">
        <div className="recipe_pic">
          <img src={image} alt={name} />
        </div>

        <div className="single_recipe">
          <div className="heading">
            <h1>{name}</h1>
          </div>
          <div className="text">
            <h4>
              <span className="drink-data">Category :</span>
            </h4>
            <p>{category}</p>
            <br></br>
            <h4>Ingredients :</h4>
            <div>
              {ingredients &&
                ingredients.map((item, index) => {
                  return (
                    <div key={index}>
                      <p>{item}</p>
                    </div>
                  );
                })}
            </div>
            <br></br>
            <h4>
              <span className="drink-data">Instructions :</span>
            </h4>
            <p>{instructions}</p>
          </div>
        </div>
      </div>
    );
  }
}
