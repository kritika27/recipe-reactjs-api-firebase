import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("pizza");
  const [recipes, setRecipes] = useState([]);
  const [list, setList] = useState([]);

  var filterRecipes = recipes.filter((todo) => {
    return todo.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const fetchRecipes = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);

      const data = await response.json();

      const { meals } = data;
      if (meals) {
        const newRecipes = meals.map((item) => {
          const { idMeal, strMeal, strMealThumb } = item;

          return {
            id: idMeal,
            name: strMeal,
            image: strMealThumb,
          };
        });
        setRecipes(newRecipes);
      } else {
        setRecipes([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchRecipes();
  }, [searchTerm, fetchRecipes]);

  return (
    <AppContext.Provider
      value={{
        loading,
        recipes,
        searchTerm,
        setSearchTerm,
        filterRecipes,
        list,
        setList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
