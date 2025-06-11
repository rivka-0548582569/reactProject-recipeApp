import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allUsersList: [],
    loggedInUser: null
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        onGetAllUsers: (state, action) => {
            try {
                state.allUsersList = action.payload;
            } catch (error) {

            }
        },

        onUserRegistered: (state, action) => {
            try {
                state.loggedInUser = action.payload;

            } catch (error) {
                console.log(error);

            }
        },
        onLogInAUser: (state, action) => {
            state.loggedInUser = action.payload;
            console.log("logged in: ",state.loggedInUser)
        },

        onUserLoggedOut: (state) => {
            try {
                state.loggedInUser = null;
            } catch (error) {

            }
        }

    }
})
export const { onUserLoggedIn, onUserRegistered, onUserLoggedOut, onGetAllUsers,onLogInAUser } =
    usersSlice.actions;
export default usersSlice.reducer;

