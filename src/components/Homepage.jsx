import { useState } from "react"
import { useNavigate, useParams } from "react-router";
import { onRealoadRecipes, onSetCurrentCatigory, onSetWordToSearch } from "../features/recipes/recipesSlice";
import { Button, Input } from "@mui/material";
import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from "react-redux";

export const Homepage = () => {

    const [word, setWord] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams()

    const searchWord = () => {
        console.log("finding : " + word);
       dispatch(onRealoadRecipes())
        dispatch(onSetWordToSearch(word));
        navigate( "/MyRecipePage/recipeList");
    }
    const goto = (str) => {
        navigate(str);
    }


    return <>

        <div id="startUpPage">


            <div class className="img">
                <h1>כיף במטבח!</h1>

                <Box component="ul" sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}>
                    <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
                        <CardCover>
                            <img
                                src='../../photos/backgroundDark.png'
                                loading="lazy"
                                srcSet="../../photos/backgroundDark.png"
                                alt="background img"
                            />
                        </CardCover>
                        <CardContent>
                            <Typography
                                level="body-lg"
                                textColor="#fff"
                                sx={{ fontWeight: 'lg', mt: { xs: 12, sm: 50 } }}
                            >
                                {/* search input: */}

                                <Paper component="form" sx={{ p: 'px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
                                    <InputBase
                                        sx={{ ml: 0, flex: 1 }}
                                        placeholder="מה נבשל היום?"
                                        inputProps={{ 'aria-label': 'מה נבשל היום?' }}
                                        onChange={(e) => { setWord(e.target.value) }}
                                    />
                                    <IconButton onClick={() => { searchWord() }} type="button" sx={{ p: '10px' }} aria-label="search" >
                                        <SearchIcon />
                                    </IconButton>
                                </Paper>


                            </Typography>
                        </CardContent>
                    </Card>
                </Box>

            </div>

            <nav id="homeOptions">
                <div className="card">
                    <button className="card-body" onClick={() => { goto("/login") }}>
                        <h2>Login</h2>
                        <p>👤</p>
                    </button>
                </div>
                <div className="card">
                    <button className="card-body" onClick={() => { goto("/regesterPage") }}>
                        <h2>Sign Up</h2>
                        <p>📝</p>
                    </button>
                </div>
                <div className="card">
                    <button className="card-body" onClick={() => { goto("/MyRecipePage/recipeList") }}>

                        <h2>recipes</h2>
                        <p>🍽️</p>
                    </button>
                </div>
            </nav>


            {/* <div id="demo" class="carousel slide" data-ride="carousel">

                <ul class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ul>
                
onClick={dispatch(onSetCurrentCatigory("סלטים"))} 
onClick={dispatch(onSetCurrentCatigory("קינוחים"))}
onClick={dispatch(onSetCurrentCatigory("דגים"))}

                <div class="carousel-inner">

                    <div class="carousel-inner ">
                        <div class="item active">
                            <img src="../../photos/1.jpg" alt="salad" />
                            <div class="carousel-caption">
                                <h3>סלטים</h3>

                            </div>
                        </div>
                    </div>
                    <div class="item ">
                        <img src="../../photos/5.jpg" alt="salad" />
                        <div class="carousel-caption">
                            <h3>סלטים</h3>

                        </div>
                    </div>
                    <div class="item ">
                        <img src="../../photos/4.jpg" alt="salad" />
                        <div class="carousel-caption">
                            <h3>סלטים</h3>

                        </div>
                    </div>
                    <div class="item ">
                        <img src="../../photos/7.jpg" alt="salad" />
                        <div class="carousel-caption">
                            <h3>סלטים</h3>

                        </div>
                    </div>


                </div>

                <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div> */}





        </div>
    </>
}
