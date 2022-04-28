export const Add_Todo = "ADD_TODO";

export const addTodo = (data)=>{
    return{
        type:Add_Todo,
        payload : data
    }
}