import React, { useContext } from "react";
import { globalContext } from "../../context/GlobalState";
import RecipeItem from "../../components/recipe-item/RecipeItem";

export default function Favourites() {
  const { favouriteList } = useContext(globalContext);
  console.log(favouriteList);
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favouriteList && favouriteList.length > 0 ? (
        favouriteList.map((item) => <RecipeItem key={item.id} recipe={item} />)
      ) : (
        <h1>no recipes add some</h1>
      )}
    </div>
  );
}
