import { useSelector } from "react-redux";
import { RootState } from "../..";

const useChat = () => {
  const { messageList } = useSelector((state: RootState) => state.chats);
  return { messageList }
}

export default useChat