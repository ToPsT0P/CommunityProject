import {AppDispatch} from "../store.ts";
import axios from "axios";
import {communityUsersSlice} from "./communityReducer.ts";


export const fetchData = () => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get("https://reqres.in/api/users")
        // dispatch(communityUsersSlice.actions.setData())
        console.log(response.data)
    } catch (error) {
        console.log(error.message)
    }
};