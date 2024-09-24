import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface userState {
    isLogin: boolean,
    Token: string,
}

const initialState: userState = {
    isLogin: false,
    Token: ""
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setToken(state, action: PayloadAction<string>) {
            state.Token = action.payload
        },

        setLoginState(state, action: PayloadAction<boolean>) {
            state.isLogin = action.payload
        }
    }
})


export default userSlice.reducer