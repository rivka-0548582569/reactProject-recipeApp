import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { onGetAllCatigories, onGetAllIngredientsOptions } from "../features/recipes/recipesSlice";
import { getAllCatigories } from "../api/catigoryApi";
import { List, ListItem, Typography } from "@mui/material";
import { addRecipe, getAllIngredientOptions } from "../api/recipesApi";
import { Grid } from "@mui/joy";


export const AddrecipeForm = () => {

    const dispatch = useDispatch();

    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState({ name: "", amount: 0 })  
    const [newCat, setNewCat] = useState("")
    const allCatigories = useSelector((state) => state.recipes.allCatigoriesList);
    
  const currentUser=useSelector((state)=>state.users.loggedInUser)  //המשתמש הנכחי

    const addIngredient = () => {   //הוספת רכיב לרישימה הנוכחית
        const helper = [...ingredients, newIngredient]
        setIngredients(helper)
    }

    const getCatigories = async () => {  //שולף את כל הקטגוריות 
        const data = await getAllCatigories();
        dispatch(onGetAllCatigories(data));
    }


    useEffect(() => {
        getCatigories();
    }, [])



    const sendrecipe = async (e) => {

        e.preventDefault();
        const form = e.target;
        const newrecipe = {
            name: form.recipeName.value,
            ingredients: ingredients,
            desc: form.recipeDesc.value,
            directions: form.recipeDirections.value,
            catigory: newCat,
            time: form.recipeTime.value,
            level: form.recipeLevel.value,
            pic: form.pic.value,
            userId:currentUser?currentUser.id:1
        };
        console.log("new recipe:", newrecipe);
        const data = await addRecipe(newrecipe)
        dispatch((state) => { state.recipes.onAddRecipe(data)});
        setIngredients([]);
    }


    return <>
        <h1>הוספת מתכון חדש</h1>
        {<form onSubmit={sendrecipe}>

            <label>שם המתכון</label>
            <input type="text" name="recipeName"></input>

            <Autocomplete
                disablePortal
                options={allCatigories}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="קטגוריה" onChange={(e) => setNewCat(e.target.value)} />}
            />

            <h3>הוספת רכיבים למתכון</h3>
            <div id="addRecipy">

                <input type="text" name="ingredientAmount" placeholder="כמות" onChange={(e) => setNewIngredient({ ...newIngredient, amount: e.target.value })} />
                <input type="text" name="ingredientName" placeholder="רכיב" onChange={(e) => setNewIngredient({ ...newIngredient, name: e.target.value })} />
                <button onClick={() => { addIngredient() }} type="button"> הוסף</button>
            </div>




            <Grid item xs={12} md={6}>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                    הרכיבים:
                </Typography>
                <List >
                    {ingredients.map((i,index) => <ListItem>
                      {index+1}. { i.amount} : {i.name}
                    </ListItem>)}
                </List>
            </Grid>


            <label>תאור קצר</label>
            <input type="text" name="recipeDesc"></input>

            <label>זמן הכנה </label>
            <input type="number" min="1" max="1000" name="recipeTime"></input>

            <label> רמת קושי</label>
            <input type="text" placeholder="...קל, בינוני, קשה" name="recipeLevel"></input>


            <label>   40תמונה-מספר מ1 עד </label>
            <input type="number" name="pic" min={0} max={40}></input>



            <label>אופן ההכנה</label>
            <input type="text" height="4rem" name="recipeDirections" />

            <button type="submit">הוסף</button>
        </form>}
    </>
}

