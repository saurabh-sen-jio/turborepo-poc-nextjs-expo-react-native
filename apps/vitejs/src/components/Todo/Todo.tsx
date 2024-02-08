import { RootState, setTodoData } from "@repo/store";
import { useSelector, useDispatch } from "react-redux";

const Todo = () => {

    const { todoData } = useSelector((state: RootState) => state.todos);
    console.log(todoData)

    return (
        <section>
            <h1>todo app</h1>
            {
                todoData.map((item, i) => <TodoItem key={i} {...item} />)
            }
        </section>
    )
}

interface ITodoItemState {
    id: number;
    title: string;
    status: boolean;
}

const TodoItem = ({ title, status, id }: ITodoItemState) => {

    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(setTodoData(id))
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