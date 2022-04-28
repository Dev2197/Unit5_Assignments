import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "../Redux/Todos/action";

export const Todo = ()=>{

    const todos = useSelector((store)=>store.todos.todos);
    const dispatch = useDispatch();

    const [text,setText] = useState("")

    const handleadd = ()=>{
        dispatch(addTodo(text))
        console.log(todos)
    }

    return(
        <div>
            <input type="text" onChange={(e)=>{setText(e.target.value)}} />
            <button onClick={handleadd}>Add Todo</button>

            {todos[todos.length-1].map((e)=>(
                <div>{e}</div>
            ))}
        </div>
    )
}