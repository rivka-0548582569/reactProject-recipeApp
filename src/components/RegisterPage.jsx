import React from "react"
import { useState } from "react";
import { onUserRegistered, onLogInAUser } from "../features/users/usersSlice";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser, login } from "../api/usersApi";
import { Button } from "@mui/material";


export const RegisterPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [usrFName, setUsrFName] = useState("");
    const [usrLName, setUsrLName] = useState("");
    const [usrPassword, setUsrPassword] = useState("");
    const [usrEmail, setUsrEmail] = useState("");


    const submitRegisterForm = async (e) => {
        e.preventDefault();
        console.log("addedUser", { usrFName, usrLName, usrEmail, usrPassword });
        const data = await addUser(usrFName, usrLName, usrEmail, usrPassword);
        dispatch(onUserRegistered(data));
        const dataU = await login(usrFName, usrLName, usrPassword)
        dispatch(onLogInAUser(dataU))
        navigate("/homePage");
    }

    return <>

        <form className="form" onSubmit={submitRegisterForm}>
                <h1>דף הרשמה</h1>
                <p>נא מלא את הטופס על מנת להתחבר לאתר שלנו.</p>
                <hr />

                <input type="text" placeholder="שם פרטי" onChange={(f) => setUsrFName(f.target.value)} required />
                <input type="text" placeholder="שם משפחה" onChange={(f) => setUsrLName(f.target.value)} required />
                <input type="email" placeholder="אימייל" onChange={(f) => setUsrEmail(f.target.value)} required />
                <input type="password" placeholder="סיסמא" onChange={(f) => setUsrPassword(f.target.value)} required />
                <hr />
                <Button variant="contained" color="success" class="btn btn-link registerbtn" type="submit"  >שלח </Button>

            <div className="container signin">
                <p>יש לך כבר חשבון? </p><button type="button" onClick={() => { navigate("/login") }} > התחבר</button>
            </div>

        </form>

    </>

}