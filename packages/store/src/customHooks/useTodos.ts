import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../index";
import { ITodoItemState, setTodoData } from "../slice/todoSlice";

interface IUseTodos {
    todoData : ITodoItemState[];
    dispatchSetTodo: (id: number) => void;
}

// Custom hook for managing todo data using Redux
const useTodos = () : IUseTodos => {
    const { todoData } = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();

    const dispatchSetTodo = (id: number) => {
        dispatch(setTodoData(id))
    }

    return { todoData, dispatchSetTodo }
}

export default useTodos;