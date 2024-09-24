import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface user {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string,
}

interface communityUsers {
    page: number,
    data: user[]

}


const initialState: communityUsers = {
    page: 1,
    data: []
}


export const communityUsersSlice = createSlice({
    name: "community",
    initialState,
    reducers: {
        setData(state, action: PayloadAction<user[]>) {
            state.data = action.payload
        },
    }
})

export default communityUsersSlice.reducer