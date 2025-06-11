import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getByUser } from "../api/favoritesApi"
import { onSetFavorits } from "../features/recipes/recipesSlice";
import { RecipeList } from "../features/recipes/RecipyList";
import { useNavigate } from "react-router";


export const FavRecipes = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const myRecipes = useSelector((state) => state.recipes.currentRecipeList)
    const user = useSelector((state) => state.users.loggedInUser)

    const renderPage = async () => {
        if (user != null) {
            const data = await getByUser(user.id);
            dispatch(onSetFavorits(data));
        }
    }

    useEffect(() => {
        renderPage();

    }, [])

    return <>
        <h2>המתכונים המעודפים שלי</h2>
        <p>❤️❤️❤️</p>
        {
            user && <RecipeList></RecipeList>
        }
        {

            !user && <div>
                <p>מצטערים, אם הינך רוצה לצפות במתכונים במעודפים שלך עליך להתחבר</p>
                <button type="button" onClick={() => { navigate("/login") }}> התחבר עכשיו</button>
            </div>
        }

    </>

}

