import {createSlice} from "@reduxjs/toolkit";

interface loggedInState {
    loginStatus: boolean,
}

const initialState: loggedInState = {
    loginStatus: false,
}

interface ChangeLoggedInValue {
    payload: boolean;
}

export const loginStatusSlice = createSlice({
    name: 'loginStatus',
    initialState,
    reducers: {
        changeLoggedInValue: (state, action: ChangeLoggedInValue) =>{
            state.loginStatus = action.payload;
        },
    }
})

export const { changeLoggedInValue } = loginStatusSlice.actions;