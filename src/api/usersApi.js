import axios from "axios";
import { USERS_REQUEST_URL } from "./urls";



export const login = async (firstName, lastName, password ) => {
    try {
      const result = await axios.get(USERS_REQUEST_URL + "login/" + firstName + "/" + lastName + "/" + password)
        //const result = await axios.get(`https://localhost:7196/api/User/login/%D7%9E%D7%A9%D7%94/%D7%9B%D7%94%D7%9F/123`)
        console.log("data",result )
        return result.data;
    }
    catch (e) {
        // throw new Error(e);
        alert("מצטערים לא ניתן להתחבר לאתר");
    }

}

export const addUser = async (Fname, Lname, email, psw) => {
    try {
        const result = await axios.post(USERS_REQUEST_URL + "userAdd/" + Fname + "/" + Lname + "/" + email + "/" + psw)
        return result.data;
    }
    catch (e) {
        alert("מצטערים לא ניתן להרשם לאתר", e);
    }
}
export const GetUserById = async (id) => {
    try {

        const result = await axios.get(USERS_REQUEST_URL + "users", { id })
        return result.data;
    } catch (error) {
        alert("שגיעה", error)
    }
}
export const getAllUsers = async () => {
    try {
        const result = await axios.get(USERS_REQUEST_URL + "users")
    } catch (error) {
        alert("שגיעה")

    }
}

