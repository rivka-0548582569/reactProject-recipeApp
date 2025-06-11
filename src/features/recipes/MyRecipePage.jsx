import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCatigories } from "../../api/catigoryApi";
import { onGetAllCatigories, onRealoadRecipes, onSetCurrentCatigory } from "./recipesSlice";
import { Outlet, useNavigate } from "react-router";
import * as React from 'react';

export const MyRecipePage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const catigories = useSelector((state) => state.recipes.allCatigoriesList)


  const getallcats = async () => {
    const data = await getAllCatigories();
    dispatch(onGetAllCatigories(data));
  };



  const setCatigory = (c) => {

    navigate("./recipeList")
    dispatch(onSetCurrentCatigory(c))
    console.log("catigory chosen", c)
  };
const reloadRecipes=()=>{
  dispatch(onRealoadRecipes()); 
}
  useEffect(() => {
    getallcats();
   
  }, [])



  return <>
    <div className="container">

      <nav aria-label="Page table of contents" className="catigoryNav">
        <h3>קטגוריות</h3>
        <ul>
          <li><button onClick={() => { reloadRecipes() }}>הכל</button></li>
          {catigories.map((c, index) =>
           <li> 
            <button onClick={() => { setCatigory(c) }} key={index} >{c}</button>
          </li>)
          }
        </ul>
      </nav>


      <Outlet></Outlet>
    </div>
  </>


}
