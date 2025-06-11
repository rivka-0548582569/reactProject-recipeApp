import axios from "axios";
import { RECIPES_REQUEST_URL } from "./urls";



export const getAllrecipes = async () => {
    try {
         console.log("try to get recipes "+ RECIPES_REQUEST_URL+"getrecipes");
        const result = await axios.get(RECIPES_REQUEST_URL+"recipes")
        return result.data;
    }
    catch (e) {
         alert("שגיאה"+e);
    }

}

export const addRecipe = async (recipe) => {
    try {
      
        console.log("path to add recipe:"+ RECIPES_REQUEST_URL);
        const result = await axios.post(RECIPES_REQUEST_URL+"AddRecipe",recipe)
        return result.data;
        //https://localhost:7196/api/Recipe/AddRecipe
    }
    catch (e) {
        alert("שגיאה"+e);

    }

}
export const getRecipeById = async (id) => {
    try {
        //https://localhost:7196/api/Recipe/recipe/1
//https://localhost:7196/api/Recipe/1
console.log("recipe by id. path:"+RECIPES_REQUEST_URL+"recipe/"+ id);
        const result = await axios.get(RECIPES_REQUEST_URL+"recipe/"+ id)
        return result.data;
    }
    catch (e) {
        alert("שגיאה "+e);

    }

}


export const getRecipeByCategory = async (catigory) => {
    try {
        const result = await axios.get(RECIPES_REQUEST_URL+"recipesByCatigory/"+ catigory)
        return result.data;
    }
    catch (e) {
        alert("שגיאה");

    }

}

export const getRecipeByCreator = async (id) => {
    try {
        const result = await axios.get(RECIPES_REQUEST_URL+"recipesById/"+ id)
        return result.data;
    }
    catch (e) {
        alert("שגיאה");

    }

}
export const getAllIngredientOptions = async () => {
    try {
        const result = await axios.get(RECIPES_REQUEST_URL+"allIngredients")
        return result.data;
    }
    catch (e) {
        alert("שגיאה");

    }

}



