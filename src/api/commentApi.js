import axios from "axios";
import { COMMENT_REQUEST_URL } from "./urls";



export const getByRecipe = async (id) => {
    try {
       
         console.log("try to get recipes "+ COMMENT_REQUEST_URL+"commentByRecipe/"+id);
        const result = await axios.get(COMMENT_REQUEST_URL+"commentByRecipe/"+id)
        return result.data;
    }
    catch (e) {
         alert("שגיאה"+e);
    }
//https://localhost:7196/api/Comment/undefined
//https://localhost:7196/api/Comment/commentByRecipe/8

}

export const addComment = async (recipeId,userId,comment) => {
    try {
 
        const result = await axios.post(COMMENT_REQUEST_URL+"addComment/"+recipeId+"/"+userId+"/"+comment)
        return result.data;
    }
    catch (e) {
        alert("שגיאה"+e);
        //https://localhost:7196/api/Comment/addComment/1/8/dggfrrdg
        //https://localhost:7196/api/Comment/addComment/1/8/ggg

    }

}



