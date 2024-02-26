import { useTodos } from "@repo/store";

const Todo = () => {

    const { todoData, dispatchSetTodo } = useTodos();

    return (
        <section>
            <h1>todo app</h1>
            {
                todoData.map((item, i) => <TodoItem key={i} {...item} dispatchSetTodo={dispatchSetTodo} />)
            }
        </section>
    )
}

interface ITodoItemState {
    id: number;
    title: string;
    status: boolean;
    dispatchSetTodo: (id: number) => void;
}

const TodoItem = ({ title, status, id, dispatchSetTodo }: ITodoItemState) => {

    const handleToggle = () => {
        dispatchSetTodo(id);
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