import React from "react";

const Todo = ({toDo, removeToDo}) => {

const handleDelete = () => removeToDo(toDo)

return (
    <li> To Do: {toDo} 
        <button onClick={handleDelete}> X </button>
    </li>
)
}

export default Todo;