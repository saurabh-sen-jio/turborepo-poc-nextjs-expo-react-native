// imports for dispatch actions
import { setTodoData } from './slice/todoSlice'
import useTodos from './customHooks/useTodos'

import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "./slice/todoSlice"

export const store = configureStore({
  reducer: {
    todos: todoReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// utils function and custom hooks
export {setTodoData, useTodos};