import React, {useState} from "react";
const NewToDoForm = ( { addToDo } ) => {
    
    const ISTATE = {
        name: ''
    }

    const [formData, setFormData] = useState(ISTATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ( 
            {...formData,
                [name]: value
            } ))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addToDo({...formData})
        setFormData(ISTATE)
    }

return(
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Add To Do</label>
        <input 
            id='toDo' 
            type='text'
            name='toDo'
            placeholder='To Do'
            value = {formData.toDo}
            onChange = {handleChange}
        />
        <button>Add</button>
    </form>

)

}

export default NewToDoForm;