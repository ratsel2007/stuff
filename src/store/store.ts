import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './user/userSlice'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { itemSlice } from './item/itemSlice'


export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        item: itemSlice.reducer
    }
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export type State = ReturnType<typeof store.getState>

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector