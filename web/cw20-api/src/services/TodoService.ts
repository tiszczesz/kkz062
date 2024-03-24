export type Todo = {
    id :number;
    name:string;
    description: string;
    isComplete :boolean;
}

export const  getTodos= async () => {
    const result = await fetch("http://localhost:5200/api/todos")
        .then((rej)=>rej.json());
    return await result;
}

export const deleteTodo = async (id:number) =>{
    const result = await fetch(`http://localhost:5200/api/todos/${id}`
         ,{method:"DELETE"}).then(rej=>rej.json());
}

export const fakeGetTodos = async ()=>{
    return await [
        {id:1,name:"Pierwsza czynność",
        description:"xvcvxcvxcxc xc",isComplete: false},
        {id:2,name:"Druga czynność",
        description:"xvcvxcvxcxc xc",isComplete: false},
        {id:3,name:"Trzecia czynność",
        description:"xvcvxcvxcxc xc",isComplete: true},
        {id:4,name:"Czwarta czynność",
        description:"xvcvxcvxcxc xc",isComplete: false},
    ]
}