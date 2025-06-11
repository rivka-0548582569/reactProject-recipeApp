
import { useNavigate } from "react-router"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { lightBlue, red } from '@mui/material/colors';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { useSelector } from "react-redux";
import { addFavorite } from "../../api/favoritesApi";

export const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.users.loggedInUser)
  const setAsFav = async () => {
  
    if(currentUser!=null){
    await addFavorite(currentUser.id, recipe.id)
    alert("המתכון הצטרף למועדפים שלך.")
}
else  alert(" עליך להתחבר.")

  }

  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {recipe.createdUserFName[0]}
          </Avatar>
        }
        title={recipe.name}
        subheader={recipe.desc}
      />
      <CardMedia
        component="img"
        height="194"
        image={'/photos/' + recipe.pic + '.jpg'}
        alt={recipe.name + "_img"}
      />
      <CardContent>
        {/* <FavoriteIcon sx={{ fontSize: 40 }} /> */}
        {/* הכיתוב בתחתית הכרטיסיה */}
        {<>
           <IconButton aria-label="add to favorites" onClick={() => { setAsFav() }}>
            <FavoriteIcon />
          </IconButton>
        </>}
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {recipe.desc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <button onClick={() => { navigate("../../MyRecipePage/RecipeDetails/" + recipe.id); }} >המשך למתכון</button>

      </CardActions>
    </Card>
  );




  // categoryId
  // categoryName
  // comments
  // createdUserEmail
  // createdUserFName
  // createdUserId
  // createdUserLName
  // desc
  // id
  // ingredients
  // instructions
  // level
  // levelId
  // name
  // pic
  // preparationTime





  /*  return <>
      
        
      { <div className="container">
             <button onClick={setFav(!fav)} value={fav ? "❤️" : "🤍"}></button> 
        </div>
        <image src={currentRecipe.picture} class="card-img-top"></image>
        <h2 className="card-title">{currentRecipe.name}</h2>
        <div className="card-body">
            <div>
                <p>רמת הקושי: {currentRecipe.dificultLevel}</p>
                <p>📈</p>
            </div>
            <div>
                <p>{currentRecipe.time}דקות </p>
                <p>⏳</p>
            </div>
            <div>
                  <p>{currentRecipe.ingredients.length()} מצרכים</p > 
                <p>🧅</p>
            </div>
            <Link  to={"./RecipeDetails/"+currentRecipe.id}>הכנת המתכון</Link>
            <div class="container">

                <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#demo">עוד </button>
                <div id="demo" class="collapse card-text">
                    {currentRecipe.desc}
                </div>
            </div>
        </div> 
     }
</>*/
}
