import axios from "axios";
import { FAVORITE_REQUEST_URL } from "./urls";



export const getByUser = async (id) => {
    try {
        const result = await axios.get(FAVORITE_REQUEST_URL+"favoritesByUser/"+id)
        return result.data;
    }
    catch (e) {
         alert("שגיאה"+e);
    }

}

export const getByRecipe = async (recipe) => {
    try {
        const result = await axios.get(FAVORITE_REQUEST_URL+"favoritesByRecipe", recipe)
        return result.data;
    }
    catch (e) {
        alert("שגיאה"+e);

    }

}
export const addFavorite = async (userId,recipeId) => {
    try {
        const result = await axios.post(FAVORITE_REQUEST_URL+"addFavorite/"+ recipeId,userId)
        return result.data;
    }
    catch (e) {
        alert("שגיאה");

    }

}


export const removeFavorite = async (recipeId,userId) => {
    try {
        const result = await axios.delete(FAVORITE_REQUEST_URL+"favoriteDelete/"+ recipeId+"/"+userId)
        return result.data;
    }
    catch (e) {
        alert("שגיאה");

    }

}




