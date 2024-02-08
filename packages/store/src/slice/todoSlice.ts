import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface ITodoItemState {
    id: number;
    title: string;
    status: boolean;
}

const todos: ITodoItemState[] = [
    {
        id: 1,
        title: "this is todo 1",
        status: false
    },
    {
        id: 2,
        title: "this is todo 2",
        status: false
    },
    {
        id: 3,
        title: "this is todo 3",
        status: false
    },
    {
        id: 4,
        title: "this is todo 4",
        status: false
    },
]

export interface ITodoSlice {
    todoData: ITodoItemState[]
}

const initialState: ITodoSlice = {
    todoData: todos
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setTodoData: (state, action: PayloadAction<number>) => {
            state.todoData = state.todoData.map((item) =>
                item.id === action.payload ? {
                    ...item,
                    status: !item.status
                }
                    : item
            );
        },
    },
})

// Action creators are generated for each case reducer function
export const { setTodoData } = todoSlice.actions

export default todoSlice.reducer