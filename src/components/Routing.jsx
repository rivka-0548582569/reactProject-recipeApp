import { Route, Routes } from "react-router"
import { LoginPage } from "./LoginPage"
import { AddrecipeForm } from "./AddRecipyForm"
import { Homepage } from "./Homepage"
import { RecipeList } from "../features/recipes/RecipyList"
import { RecipeDetails } from "../features/recipes/RecipyDetails"
import { RegisterPage } from "./RegisterPage"
import { FavRecipes } from "./FavRecipes"
import { MyRecipePage } from "../features/recipes/MyRecipePage"


export const Routing = () => {



    return <>
        <Routes>
            <Route path="/" element={<Homepage></Homepage>}></Route>
            <Route path="/homePage" element={<Homepage></Homepage>}></Route>
            <Route path="login" element={<LoginPage></LoginPage>}></Route>
            <Route path="regesterPage" element={<RegisterPage></RegisterPage>}></Route>
            <Route path="addRecipeForm" element={<AddrecipeForm></AddrecipeForm>}></Route>
            <Route path="MyRecipePage" element={<MyRecipePage></MyRecipePage>}>
                <Route path="recipeList" element={<RecipeList ></RecipeList>}> </Route>
                <Route path="" element={<RecipeList ></RecipeList>}> </Route>
                <Route path="RecipeDetails/:recipeId" element={<RecipeDetails></RecipeDetails>}></Route>
            </Route>
            <Route path="Favorites" element={<FavRecipes ></FavRecipes>}></Route>
        </Routes>
    </>
}
