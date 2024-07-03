import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { globalContext } from "../../context/GlobalState";

export default function Detials() {
  const {
    loading,
    setLoading,
    recipeDetialsData,
    setRecipeDetialsData,
    favouriteList,
    handleAddToFavourite,
  } = useContext(globalContext);
  const { id } = useParams();
  async function fetchRecipeItem() {
    setLoading(true);
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const result = await response.json();
      if (result && result.data && result.data.recipe) {
        setLoading(false);
        setRecipeDetialsData(result.data.recipe);
      }
    } catch (error) {}
  }
  useEffect(() => {
    fetchRecipeItem();
  }, [id]);
  // console.log(recipeDetialsData);
  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetialsData?.image_url}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
            alt="recipe image"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium">
          {recipeDetialsData?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {recipeDetialsData?.title}
        </h3>
        <div>
          <button
            className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white"
            onClick={() => handleAddToFavourite(recipeDetialsData)}
          >
            {favouriteList.findIndex(
              (item) => item.id === recipeDetialsData.id
            ) === -1
              ? "add to favourite"
              : "remove from favourite"}
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black py-2 block">
            Ingrdients
          </span>
          <hr />
          <ul className="flex flex-col gap-3 mt-2">
            {recipeDetialsData?.ingredients?.map((item, index) => (
              <li key={index}>
                <span className="text-2xl font-semibold text-black">
                  {item.quantity ? item.quantity : "0 "} {item.unit}
                </span>
                <span className="text-2xl font-semibold text-black">
                  {item.description}{" "}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
