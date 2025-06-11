import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import { getRecipeByCreator, getRecipeById } from "../../api/recipesApi";
import { useDispatch, useSelector } from "react-redux";
import { addComment, getByRecipe } from "../../api/commentApi";
import { onGetCurrentRecipeList } from "./recipesSlice";
import { Box, Card, CardActionArea, CardContent, CardHeader, Paper, Typography } from "@mui/material";
import { GetUserById } from "../../api/usersApi";

export const RecipeDetails = () => {

  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const recipeId = parseInt(params.recipeId);
  const [currentRecipe, setcurrentRecipe] = useState({});
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const [warning, setWarning] = useState(false);

  
  const currentUser = useSelector((state) => state.users.loggedInUser);

  const setRecipe = async () => {
   
    const data = await getRecipeById(recipeId);
    setcurrentRecipe(data);
    console.log("data ", data)

  };

  const getComments = async () => {

    const data = await getByRecipe(recipeId);
    setComments(data);
  }
  const toMoreRecipes = async () => {
    const data = await getRecipeByCreator(currentRecipe.userId);
    dispatch(onGetCurrentRecipeList(data));
    navigate("/recipeList")
  }

  const sendComment = async () => {
    if (currentUser == null) {
      setWarning(true);
    }
    else {
      const data = await addComment(recipeId, currentUser.id, newComment)
      alert("תודה רבה!");
    }
  }

  useEffect(() => {
    console.log("detail page")
    setRecipe();
    getComments();
  }, [])



  return <>
    <Paper class="page" elevation={7} >
      <button onClick={() => { toMoreRecipes() }}>לצפיה בעוד מתכונים של <span>{/*{currentRecipe.user.firstName} */}</span></button>
      <h2>{currentRecipe.name}</h2>
      <h3>{currentRecipe.desc}</h3>
      <div className="Details">
        <p>זמן:{currentRecipe.preparationTime}</p>
        <p>רמת קושי:{currentRecipe.level}</p>
      </div>

      <img src={"/photos/" + currentRecipe.pic + ".jpg"}></img>

      <ul>
        {currentRecipe.ingredients && currentRecipe.ingredients.map((i, index) =>
          <li key={index}><p>{i.ingredientName}</p><p>{i.amount}</p></li>
        )}

      </ul>


      < p>{currentRecipe.instructions},{currentRecipe.instructions}</p>

      <div>
        <input type="text" placeholder="שתף אותנו בדעתך על המתכון הזה" height="3rem" onChange={(e) => { setNewComment(e.target.value) }} />
        <button onClick={() => { sendComment() }} type="button">שלח</button>
        <div class="alert alert-danger alert-dismissible" hidden={!warning}>
          <button type="button" class="close" data-dismiss="alert" onClick={() => { setWarning(false) }}>×</button>
          <strong>שגיעה!</strong> בכדי להוסיף חות דעת על המתכון עליך להיות להתחבר למערכת.
        </div>
      </div>
      
  

  {/* </Paper> {GetUserById(c.userId).firstName */}
{/* //c.comment */}
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
        gap: 2,
      }}
    >
      {comments.map((card, index) => (
        <Card sx={{
          height: '100%',
          '&[data-active]': {
            backgroundColor: 'action.selected',
            '&:hover': {
              backgroundColor: 'action.selectedHover',
            },
          },
        }}>
            <CardContent sx={{ height: '100%' }}>
              <Typography variant="h5" component="div">
                {GetUserById(card.userId).firstName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.comment}
              </Typography>
            </CardContent>
        </Card>
      ))}
    </Box>
    </Paper>
  


  </>


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



}

