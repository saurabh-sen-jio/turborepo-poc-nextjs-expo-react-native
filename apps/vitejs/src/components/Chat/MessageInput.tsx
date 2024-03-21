import React from "react";

interface IMessageInput {
  handleSubmit: any;
}

const MessageInput = ({ handleSubmit }: IMessageInput) => {
  const [message, setMessage] = React.useState("");

  const handleSendMessage = () => {
    try {
      if (message.length === 0) return;
      handleSubmit(message).then(() => setMessage(""));
    } catch (error) {
      console.log("errrorr", error);
    }
  };

  return (
    <div
      className="message__input"
      style={{
        display: "flex",
        gap: "20px",
      }}
    >
      <input
        style={{ flex: 1 }}
        type="text"
        placeholder="type your message"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button className="send__message" onClick={handleSendMessage}>
        SEND
      </button>
    </div>
  );
};

export default MessageInput;
