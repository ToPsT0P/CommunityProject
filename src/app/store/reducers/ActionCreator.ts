import {AppDispatch} from "../store.ts";
import axios from "axios";
import {communityUsersSlice} from "./communityReducer.ts";


export const fetchData = (page: number) => async (dispatch: AppDispatch) => {


    try {
        const response = await axios.get(`https://reqres.in/api/users?page=${page}&per_page=8`)
        dispatch(communityUsersSlice.actions.setData(response.data.data))
    } catch (error) {
        console.log(error.message)
    }
};