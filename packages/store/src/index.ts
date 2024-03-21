// imports for dispatch actions
import { setTodoData } from './slice/todoSlice'
import useTodos from './customHooks/useTodos'

import useChat from "./customHooks/ChatHooks/useChat"

import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "./slice/todoSlice"
import useWebSocket from "./customHooks/useWebSocket";
import chatReducer from "./slice/chatSlice";
import {localUserId} from "./constants";
import { chatApi } from './customHooks/ChatHooks/chatApi'

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    chats: chatReducer,
    [chatApi.reducerPath]: chatApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(chatApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// utils function and custom hooks
export {setTodoData, useTodos, useWebSocket, localUserId, useChat, chatApi };
