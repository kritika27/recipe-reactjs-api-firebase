import React from "react";
import { useGlobalContext } from "../../context";
import Recipe from "../../components/Recipe/Recipe";
import Search from "../../components/Search/Search";
import "../../components/Recipe/Recipe.css";

export default function RecipeList() {
  const { filterRecipes } = useGlobalContext();

  return (
    <>
      <Search />
      <div className="cocktails-center">
        {filterRecipes.map((item) => {
          return <Recipe key={item.id} {...item} />;
        })}
      </div>
    </>
  );
}
