import { createSlice } from "@reduxjs/toolkit";
 

const initialState = {
    auth: {},
    isAuthenticated: false,
    user: null
}



export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload
            
        },
        addAuth: (state, action) =>{

            console.log(action.payload); // {username: yamone, }
            
            state.auth = action.payload

            console.log(state.auth);
            
        }
    }
})

export const {login, addAuth} = authSlice.actions

export const selectIsAuthenticated =  (state) => state.auth.isAuthenticated

export default authSlice.reducer