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
        //     TODO Не забыть записывать токен в localStorage
        },

        setLoginState(state, action: PayloadAction<boolean>) {
            state.isLogin = action.payload
        },
        isLogin(state, action: PayloadAction<string>){
        //     TODO Логика проверки ключа к серверу если верный, то логиним
        }
    }
})


export default userSlice.reducer