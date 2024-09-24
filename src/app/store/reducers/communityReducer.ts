import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IUser {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string,
}

interface communityUsers {
    page: number,
    data: IUser[]

}


const initialState: communityUsers = {
    page: 1,
    data: []
}


export const communityUsersSlice = createSlice({
    name: "community",
    initialState,
    reducers: {
        setData(state, action: PayloadAction<IUser[]>) {
            state.data = action.payload
        },
        setPage(state, action: PayloadAction<number>){
            state.page = action.payload
        }
    }
})

export default communityUsersSlice.reducer