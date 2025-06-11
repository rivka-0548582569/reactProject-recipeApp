import { useSelector } from "react-redux"
import { Link } from "react-router";
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';
import { onSetWordToSearch } from "../features/recipes/recipesSlice";


export const NavbarMain = () => {

const loggedInUser= useSelector((state)=>state.users.loggedInUser);

const word=loggedInUser?loggedInUser.firstName:"התחבר";
    return <>
        <nav id="mainNav">
            <Link to="/homePage" >דף הבית</Link>
            <Link to="/regesterPage">הצטרף אלינו עכשיו!</Link>
            
            <Link to="/MyRecipePage">כל המתכונים שלנו</Link>
            <Link to="/Favorites">❤️המתכונים שלי❤️</Link>

            {
               // loggedInUser==null
               loggedInUser!=null
               && <Link to="/addRecipeForm">להוספת מתכון</Link>
            }
            <Link to="/login"> <Chip icon={<FaceIcon />} label={word}  /> </Link>

        </nav>
    </>

}