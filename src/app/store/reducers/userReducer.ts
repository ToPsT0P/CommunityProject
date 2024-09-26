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
            localStorage.setItem("token", action.payload)
        },

        setLoginStateOff(state, action: PayloadAction<boolean>) {
            state.isLogin = action.payload
            localStorage.removeItem("token")
        },
        isLogin(state, action: PayloadAction<string>){
            // Тут логика проверки токена, но reqres.in не позволяет сделать проверку токена потому костыль
            console.log(action)
            if(localStorage.getItem("token")){
                state.isLogin = true
            }
        }
    }
})


export default userSlice.reducer