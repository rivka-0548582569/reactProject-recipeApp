import { configureStore } from "@reduxjs/toolkit"
import recipesSlice from "../features/recipes/recipesSlice"
import usersSlice from "../features/users/usersSlice"


// const addrecipeFunc = (recipeName,desc,directions,ingredients,time,level) => {
//                 allrecipesList.push({name:recipeName,
//                       desc:desc,  
//                       picture: "src/photos/סופגניות.jpg",
//                       fav:false,
//                       time:time,
//                       dificultLevel:level,
//                       catigory:catigories,
//                       ingredients:ingredients,
//                       directions:directions

// })}


// const countrecipes=allrecipesList.length();

// const changeFavStateFunc=(recipeId)=>{
// allrecipesList.forEach(r => {
//     if(r.id==recipeId)
//     r.fav=!r.fav;
// });
// }

// }

// let catigories = [לחם,
//     חלבי,
//     בשרים,
//     עופות,
//     דגים,
//     קינוחים,
//     עוגות,
//     שתיות,
//     פסח,]

export const myStore =configureStore({
    reducer:{
         users:usersSlice,
        recipes:recipesSlice,       
    }
});

