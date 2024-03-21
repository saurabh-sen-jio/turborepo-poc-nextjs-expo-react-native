import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { appendMessage } from "../../slice/chatSlice";

export interface Message {
  userId: string;
  message: string;
}

const WEB_SOCKET_SERVER_URL = "wss://socketsbay.com/wss/v2/1/demo/";

const chatApi = createApi({
  reducerPath: "chatApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    // Define the endpoint for receiving messages
    receiveMessage: builder.query<Message, void>({
      query: () => "", // We don't need to specify a query function for WebSocket
      async onCacheEntryAdded(arg, { dispatch }) {
        try {
          // Connect to WebSocket server
          let ws: WebSocket = new WebSocket(WEB_SOCKET_SERVER_URL);

          // Wait for the WebSocket connection to open
          await new Promise((resolve, reject) => {
            ws?.addEventListener("open", resolve);
            ws?.addEventListener("error", reject);
          });

          ws.onerror = (error) => {
            console.log(error);
          };

          // When a message is received, update cache with the new message
          ws.onmessage = (event: MessageEvent) => {
            const data = event.data;
            // update this data to chat list
            dispatch(appendMessage({ userId: "321", message: data }));
          };
        } catch (error) {
          console.error("Error occurred:", error);
        }
      },
    }),

    // Define the endpoint for sending messages
    sendMessage: builder.mutation<Message, string>({
      query: () => "", // This will send the message as is
      async onCacheEntryAdded(arg, { dispatch, cacheEntryRemoved }) {
        try {
          // Connect to WebSocket server
          let ws: WebSocket = new WebSocket(WEB_SOCKET_SERVER_URL);

          // Wait for the WebSocket connection to open
          await new Promise((resolve, reject) => {
            ws?.addEventListener("open", resolve);
            ws?.addEventListener("error", reject);
          });

          ws.onerror = (error) => {
            console.log(error);
          };

          // Send the message through WebSocket
          ws.send(arg);
          dispatch(appendMessage({ userId: "123", message: arg }));

        } catch (error) {
          console.log("error occurred", error);
        }
      },
    }),
  }),
});

export { chatApi };
