import { useEffect, useState } from "react"
import { Todo, deleteTodoApi, fakeGetTodos, getTodos } from "../../services/TodoService"
import TodoComponent from "../TodoComponent/TodoComonent"

type TodoListProps = {

}

const TodoList = (props: TodoListProps) => {
    const [todos, setTodos] = useState<Todo[]>([])
    const deleteTodo = (id: number) => {
        deleteTodoApi(id)
        setTodos(prevTodos => prevTodos.filter((todo) => todo.id != id))
    }
    useEffect(() => {
        // async function Moja(){
        //     //...
        // }
        // Moja();
        (async function () {
            // const apiTodos: Todo[] = await fakeGetTodos()
            const apiTodos: Todo[] = await getTodos()

            setTodos(apiTodos)
            console.log(apiTodos);

        })();

    }, [])
    return (
        <>
        <div className="d-flex p-2">
            {todos.map((item) => (
                <TodoComponent key={item.id} todo={item} deleteHandler={deleteTodo} />
            )
            )}
        </div>
        <div>
                <form >tu formularz</form>
        </div>
        </>
    )
}

export default TodoList
