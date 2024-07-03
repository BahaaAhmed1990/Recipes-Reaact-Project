import React, { createContext, useEffect, useState } from "react";

export const globalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [recipeDetialsData, setRecipeDetialsData] = useState({});
  const [favouriteList, setFavouriteList] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const result = await response.json();

      if (result?.data?.recipes.length > 0) {
        setLoading(false);
        setRecipes(result?.data?.recipes);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  function handleAddToFavourite(getItem) {
    console.log(getItem);
    const cpyFavouriteList = [...favouriteList];
    let index = cpyFavouriteList.findIndex((item) => item.id === getItem.id);

    if (index === -1) {
      cpyFavouriteList.push(getItem);
    } else {
      cpyFavouriteList.splice(index);
    }
    console.log(cpyFavouriteList);
    setFavouriteList(cpyFavouriteList);
  }
  // console.log(recipes);
  return (
    <globalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        setLoading,
        recipes,
        recipeDetialsData,
        setRecipeDetialsData,
        favouriteList,
        handleAddToFavourite,
      }}
    >
      {children}
    </globalContext.Provider>
  );
}
