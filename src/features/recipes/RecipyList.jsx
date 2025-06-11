import { useSelector } from "react-redux";
import { RecipeCard } from "./RecipeCard";



export const RecipeList = () => {
  const allRecipes = useSelector((state) => state.recipes.currentRecipeList);

  return <>
    <div id="recipeCardsList">
      {allRecipes && allRecipes.map((recipe, i) =>
        <RecipeCard key={i} recipe={recipe} />
      )}
      {
        !allRecipes && <p>אין מתכונים</p>
      }

    </div>

  </>

}