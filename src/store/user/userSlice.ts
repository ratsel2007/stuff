import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/userInterface";


interface userState {
    allUsers: IUser[],
    currentUser: IUser | null
}

const initialState: userState = {
    allUsers: [],
    currentUser: null
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getAllUsers: (state, action: PayloadAction<IUser[]>) => {
            state.allUsers = action.payload
        },
        setCurrentUser: (state, action: PayloadAction<IUser>) => {
            state.currentUser = action.payload
        }
    }
})

export const {actions, reducer} = userSlice

