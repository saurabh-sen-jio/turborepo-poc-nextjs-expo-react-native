import React from "react";
import { chatApi, useChat } from "@repo/store";
import Message from './Message'
import MessageInput from './MessageInput'

const { useReceiveMessageQuery, useSendMessageMutation } = chatApi;

const currentUserId = "123";

const Chat = () => {
  
  useReceiveMessageQuery();
  const [sendMessage] = useSendMessageMutation();
  
  const { messageList } = useChat();
  
  return (
    <div
      className="chat__container"
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "2rem",
      }}
    >
      <div className="messages__container">
        {messageList.map((item, idx) => (
          <Message
            key={idx}
            message={item.message}
            isCurrentUser={item.userId === currentUserId}
          />
        ))}
      </div>
      <MessageInput handleSubmit={sendMessage} />
    </div>
  );
};

export default Chat;
