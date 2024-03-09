import OK from '../../media/todo.png';
import NO_OK from '../../media/not_todo.png';
import { Todo } from '../../services/TodoService';

type TodoProps = {
    todo: Todo,
    deleteHandler:(id:number)=>void
}

const TodoComponent = ({todo,deleteHandler}: TodoProps) => {

    const srcEffect = todo.isComplete ? OK : NO_OK
    return (
        <div className='card m-2' style={{ width: '18rem',border:"solid black 1px" }}>
            <img src={srcEffect} className='card-img-top text-center'
            style={{width:50}}
                alt={todo.isComplete.toString()} />
            <div className="card-body">
                <h5 className='card-title'>{todo.name}</h5>
                <div className='card-text'>
                    {todo.description}
                </div>
                <input
                 onClick={()=>deleteHandler(todo.id)}
                 type="button" className='btn btn-outline-dark' value="Usuń"/>
            </div>
        </div>

    )
}
export default TodoComponent;