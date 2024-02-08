import { RootState, increment } from "@repo/store";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const todos = [
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

interface ITodoItemState {
    id: number;
    title: string;
    status: boolean;
}

const Todo = () => {

    const { value } = useSelector((state: RootState) => state.todos)

    const [todoData, setTodoData] = useState<ITodoItemState[]>(todos);

    const dispatch = useDispatch();

    const handleIncrement =() => {
        dispatch(increment())
    }

    return (
        <section>
            <h1>todo app</h1>
            <p>value : {value}</p>
            <button onClick={handleIncrement}>increment</button>
            {
                todoData.map((item, i) => <TodoItem key={i} {...item} todos={todoData} setTodoData={setTodoData} />)
            }
        </section>
    )
}

interface ITodoItem extends ITodoItemState {
    todos: ITodoItemState[];
    setTodoData: React.Dispatch<React.SetStateAction<ITodoItemState[]>>;
}

const TodoItem = ({ title, status, id, setTodoData, todos }: ITodoItem) => {

    const handleToggle = () => {
        const result = todos.map((item) =>
            item.id === id ? {
                ...item,
                status: !status
            }
                : item
        );
        setTodoData(result)
    }

    return (
        <div style={{
            display: 'flex',
            gap: '20px'
        }}>
            <input type="checkbox" name="status" id="status" checked={status} onChange={handleToggle} />
            <p>{title}</p>
            {
                status ? <p>done</p> : <p>pending</p>
            }
        </div>
    )
}

export default Todo