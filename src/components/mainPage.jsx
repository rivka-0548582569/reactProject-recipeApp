import { Outlet } from "react-router"
import { Routing } from "./Routing"
import { NavbarMain } from "./NavbarMain"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getAllrecipes } from "../api/recipesApi"
import { onGetAllRecipes, onGetCurrentRecipeList } from "../features/recipes/recipesSlice"

export const MainPage=()=>{

const dispatch=useDispatch();

 const getAllRecipes = async () => {
    const data = await getAllrecipes();
    dispatch(onGetAllRecipes(data));
    dispatch(onGetCurrentRecipeList(data));
  }

  useEffect(() => {
    getAllRecipes();
  }, [])

    return <>
    <NavbarMain></NavbarMain>
     <Routing></Routing>
     <Outlet></Outlet>
</>

}