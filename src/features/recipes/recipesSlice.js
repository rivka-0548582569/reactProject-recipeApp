import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    allCatigoriesList: [],
    allrecipesList: [], //שומר את כל המתכונחם
    currentRecipeList: [],   //  הרשימה המוצגת כעת
    wordToSearch: "",  
    currentRecipe: null,
    currentCatigory: null, 
    allIngredientsOptions: [],
}

const recipesSlice = createSlice({
    name: "recipe",
    initialState,
    reducers: {
        onGetAllRecipes: (state, action) => {    //כל המתכונים
            try {
                state.allrecipesList = action.payload;
                console.log("all recipes", state.allrecipesList);
            } catch (error) {

            }
        },
        onGetAllCatigories: (state, action) => {  //  לפי קטגוריה
            try {
                state.allCatigoriesList = action.payload;
                console.log("entered the onGetAllCatigories func ", state.allCatigoriesList);

            } catch (error) {

            }
        },
        onGetCurrentRecipeList: (state, action) => {
            try {
                state.currentRecipeList = action.payload;
                console.log("favs", state.currentRecipeList);

            } catch (error) {

            }
        },
        onSetWordToSearch: (state, action) => {
            try {
                
                state.wordToSearch = action.payload;
                const tempList=[]; 
                 state.allrecipesList.forEach(r =>{
                    debugger
                    console.log("r: ",r);
                    if (r&&(r.name.indexOf(state.wordToSearch)>=0 || r.categoryName.indexOf(state.wordToSearch)>=0)){
                    tempList.push(r);
            }})
                state.currentRecipeList=tempList;
            } catch (error) {
                alert("cant set word to search")
            }
        },
        onAddRecipe: (state, action) => {
            try {
                state.addRecipe = action.payload;
            } catch (error) {

            }
        },
        onSetFavorits: async (state, action) => {
            try {
                debugger
                const allFavs = action.payload;
                state.currentRecipeList = state.allrecipesList.filter(r => 
                    allFavs.some(f => f.recipyId === r.id)
                ).map(r => r.Target.base_);
                
                console.log("new list: ", state.currentRecipeList);
            } catch (error) {
                console.log("שגיעה", error);
            }
        },
        onSetCurrentCatigory: (state, action) => {
            try {
                state.currentCatigory = action.payload;
                if (state.currentCatigory != null) {
                    state.currentRecipeList = state.allrecipesList.filter(r => r.categoryName === state.currentCatigory);
                    console.log("all recipes", state.allrecipesList);
                    console.log("current recipes", state.currentRecipeList);
                }
                else {

                }
            } catch (error) {

            }
        },
        onRecipeSelected: (state, action) => {
            try {
                state.currentRecipe = action.payload;
            } catch (error) {

            }
        },
        onRealoadRecipes: (state) => {
            console.log("current: " + state.currentRecipeList)
            state.currentRecipeList = state.allrecipesList;
            console.log("current: " + state.currentRecipeList)
        },
        onGetAllIngredientsOptions: (state, action) => {
            try {
                state.allIngredientsOptions = action.payload;
            } catch (error) {

            }
        }
    }
});
export const { onSetFavorits, onGetAllIngredientsOptions, onRealoadRecipes, onRecipeSelected, onGetCurrentRecipeList, onGetAllCatigories, onAddRecipe, onSetCurrentCatigory, onGetAllRecipes, onSetWordToSearch } =
    recipesSlice.actions;

export default recipesSlice.reducer;


