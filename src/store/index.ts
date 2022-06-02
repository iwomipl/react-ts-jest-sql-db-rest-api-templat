import {configureStore} from "@reduxjs/toolkit";
import {loginStatusSlice} from "../features/loginStatus-slice";


export const store = configureStore({
    reducer: {
        loggedInStatus: loginStatusSlice.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>