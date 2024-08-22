import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';


const Form = ({ input, setInput, todos, setTodos,editTodo,setEditTodo }) => {
   
    const updateTodo=(title,id,completed)=> {
        const newTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, title, completed } : todo
        );
        
        setTodos(newTodos);
        setEditTodo("");
        setInput("")
    }

    useEffect(()=>{
        if(editTodo)
            setInput(editTodo.title);
        else 
         setInput("");
    },[editTodo,setInput]);

    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
       if (!editTodo)
        { setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
        setInput("");
        }
        else {
            updateTodo(input,editTodo.id, editTodo.completed);
        }
    };
    return (
        <form onSubmit={onFormSubmit}>
            <input type='text' 
            placeholder='Enter a Todo...' 
            className='task-input' 
            value={input} 
            required onChange={onInputChange} />
            <button className='button-add' type='submit'>
                {editTodo? "ok" : "Add"}
            </button>
        </form>
    )
}

export default Form