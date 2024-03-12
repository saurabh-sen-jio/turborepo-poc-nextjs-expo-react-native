import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
export interface Message {
    userId: string,
    message: string,
}
export function isMessage(data: any): data is Message {
    return typeof data.userId === 'string' && typeof data.message === 'string';
}

export interface chatMessageState {
    messageList: Message[]
}

const initialState: chatMessageState = {
    messageList: []
}

export const chatSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        appendMessage: (state, action: PayloadAction<Message>) => {
            state.messageList = [...state.messageList, action.payload];
        },
    },
})

export const { appendMessage } = chatSlice.actions

export default chatSlice.reducer
