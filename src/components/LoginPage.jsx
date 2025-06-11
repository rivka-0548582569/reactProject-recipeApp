import { useState } from "react"
import { useDispatch } from "react-redux";
import { onLogInAUser, onUserLoggedIn } from "../features/users/usersSlice";
import { login } from "../api/usersApi";
import { useNavigate } from "react-router";
import { Button } from "@mui/material";

export const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate();
    
    const [newUser, setNewUser] = useState({
        firstName: "",
        lastName: "",
        password: ""
    })

    const setFirstName = (fn) => {
        const data = newUser;
        data.firstName = fn;
        setNewUser(data);
    }
    const setLastName = (ln) => {
        const data = newUser;
        data.lastName = ln;
        setNewUser(data);
    }

    const setPassword = (n) => {
        const data = newUser;
        data.password = n;
        setNewUser(data);
    }
    const submitLoginForm = async (e) => {
        e.preventDefault();
        const data = await login(newUser.firstName,newUser.lastName,newUser.password);

        dispatch(onLogInAUser(data));
        console.log("loggedin user", newUser);
        navigate("/")
    }

    return <>

        <h1>דף התחברות</h1>
        <form className="form" >
                <hr />
                <input name="firstName" type="text" placeholder="שם פרטי" onChange={(e) => { setFirstName(e.target.value) }} required></input>
                <input name="lastName" type="text" placeholder="שם משפחה" onChange={(e) => { setLastName(e.target.value) }} required></input>
                <input name="password" type="password" placeholder="סיסמא" onChange={(e) => { setPassword(e.target.value) }} required></input>
                <hr />
                <Button variant="contained" color="success" type="button" class="btn btn-link registerbtn" onClick={(e)=>submitLoginForm(e)}  >שלח </Button>

                <div class="container signin">
                    <p>עוד לא נרשמת למערכת?</p><button type="button"  onClick={()=>{navigate("/regesterPage")} }> הצטרף עכשיו</button>
                </div>
        </form>
    </>

}

