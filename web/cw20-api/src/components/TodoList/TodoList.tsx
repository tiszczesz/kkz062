import { useEffect, useState } from "react"
import { Todo, fakeGetTodos } from "../../services/TodoService"
import TodoComponent from "../TodoComponent/TodoComonent"

type TodoListProps = {

}

const TodoList = (props: TodoListProps) => {
    const [todos, setTodos] = useState<Todo[]>([])
    const deleteTodo = (id: number) => {
        setTodos(prevTodos => prevTodos.filter((todo) => todo.id != id))
    }
    useEffect(() => {
        // async function Moja(){
        //     //...
        // }
        // Moja();
        (async function () {
            const apiTodos: Todo[] = await fakeGetTodos()
            console.log(apiTodos);
            setTodos(apiTodos)
        })();

    }, [])
    return (
        <div className="d-flex p-2">
            {todos.map((item) => (
                <TodoComponent todo={item} deleteHandler={deleteTodo} />
            )
            )}
        </div>
    )
}

export default TodoList
