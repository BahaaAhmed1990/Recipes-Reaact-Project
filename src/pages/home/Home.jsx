import React, { useContext } from "react";
import { globalContext } from "../../context/GlobalState";
import RecipeItem from "../../components/recipe-item/RecipeItem";

export default function Home() {
  const { loading, recipes } = useContext(globalContext);
  console.log("recipes", recipes);
  console.log("loading", loading);
  if (recipes.length === 0) {
    return <h1>Please enter recipe name</h1>;
  }
  return (
    <div className="p-8 flex justify-center gap-10 flex-wrap container mx-auto">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {recipes?.map((recipeItem) => (
            <RecipeItem key={recipeItem.id} recipe={recipeItem} />
          ))}
        </>
      )}
    </div>
  );
}
