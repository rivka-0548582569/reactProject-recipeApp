import axios from "axios"
import { CATEGORY_REQUEST_URL, COMMENT_REQUEST_URL } from "./urls"

export const getAllCatigories=async()=>{
    try {
        const result= await axios.get(CATEGORY_REQUEST_URL+"catigories")
   return result.data;
    } catch (error) {
       alert("שגיעה"+error) 
    }
}
