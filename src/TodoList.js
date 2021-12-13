import React, {useState} from "react";
import NewToDoForm from "./NewToDoForm";
import { v4 as uuid } from 'uuid';

import ToDo from './ToDo'
const TodoList = () => {


    const [toDoList, setToDoList] = useState([{
        id: uuid(), toDo: "work"
    }])

    const addToDo = (newToDo) => {
        setToDoList(items => [...items, { ...newToDo, id: uuid() }] )
    }

    const removeToDo = (removee) => {
        let updatedArray = toDoList.filter(item => item.toDo !== removee)
        setToDoList(updatedArray)
    }

return(

    <div>
        <NewToDoForm addToDo={addToDo}/>
        <ul>
            {toDoList.map( ({id, toDo}) => <ToDo id={id} toDo={toDo} key={id} removeToDo={removeToDo} />)}
        </ul>
        <p> {toDoList[0].toDo} : {toDoList.length} </p>
        {console.log(TodoList)}
    </div>

)

}

export default TodoList;