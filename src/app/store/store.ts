import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import communityReducer from "./reducers/communityReducer.ts";
import userReducer from "./reducers/userReducer.ts";

const rootReducer = combineReducers({
    communityReducer,
    userReducer

})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']