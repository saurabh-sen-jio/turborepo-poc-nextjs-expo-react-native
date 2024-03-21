const Message = ({
  message,
  isCurrentUser,
}: {
  message: string;
  isCurrentUser: boolean;
}) => {
  return (
    <p
      style={{
        marginLeft: isCurrentUser ? "auto" : "0",
        backgroundColor: isCurrentUser ? "blue" : "purple",
        width: "max-content",
        padding: "10px",
        borderRadius: "14px",
      }}
    >
      {message}
    </p>
  );
};

export default Message;
