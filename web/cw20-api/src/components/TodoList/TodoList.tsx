import { FormEvent, useEffect, useState } from "react"
import { Todo, deleteTodoApi, fakeGetTodos, getTodos, insertTodo } from "../../services/TodoService"
import TodoComponent from "../TodoComponent/TodoComonent"

type TodoListProps = {

}

const TodoList = (props: TodoListProps) => {
    const [todos, setTodos] = useState<Todo[]>([])
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [isComplete, setIsComplete] = useState(false);
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
    function handelSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        const todo:Todo = {
            id: -1,
            name: name,
            isComplete: isComplete,
            description: description
        }
        setTodos([...todos,todo]);
        insertTodo(todo);
    }

    return (
        <>
            <div className="d-flex p-2">
                {todos.map((item) => (
                    <TodoComponent key={item.id} todo={item} deleteHandler={deleteTodo} />
                )
                )}
            </div>
            <div>
                <form onSubmit={handelSubmit} >
                    <input type="text" placeholder="podaj nazwę"
                        onBlur={(event) => setName(event.target.value)} /><br />
                    <input type="text" placeholder="podaj opis"
                        onBlur={(event) => setDescription(event.target.value)} /><br />
                    <input type="checkbox"
                        onChange={(event) => setIsComplete(event.target.checked)} /><br />
                    <input type="submit" value="Zapisz" />
                </form>
            </div>
        </>
    )
}

export default TodoList
