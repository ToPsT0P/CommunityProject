import {AppDispatch} from "../store.ts";
import axios from "axios";
import {communityUsersSlice} from "./communityReducer.ts";
import {useAppSelector} from "../../../shared/hooks/redux.ts";


export const fetchData = () => async (dispatch: AppDispatch) => {

    try {
        const response = await axios.get(`https://reqres.in/api/users?per_page=8?page=${1}`)
        dispatch(communityUsersSlice.actions.setData(response.data.data))
    } catch (error) {
        console.log(error.message)
    }
};