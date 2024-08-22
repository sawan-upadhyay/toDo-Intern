import React from 'react';
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const TodosList = ({todos,setTodos,setEditTodo}) => {
  const handleComplete= (todo)=> {
    
    setTodos(
      todos.map((item)=> {
        if (item.id===todo.id)
          return {...item, completed:!item.completed} ;
        else
         return item;
      })
    );
  };
const handleEdit=( {id })=> {
  const findTodo=todos.find((todo)=>todo.id===id);
  setEditTodo(findTodo);
 };

  const handleDelete=({id})=> {
    setTodos(todos.filter((todo)=> todo.id!==id));
  }; 

  return (
    <div>
      {
        todos.map((todo)=> (
          <li className="list-item" key={todo.id}>
            <input 
              type="text"
              value={todo.title}
              className={`list ${todo.completed ? "complete" : ""}`}
              onChange={(event)=> event.preventDefault()}
            />
              <div>
                <button className="button-complete task-button" onClick={()=> handleComplete(todo)}>
              
                 {todo.completed ? <RiCheckboxCircleFill /> : <MdOutlineCheckBoxOutlineBlank /> }
                </button>

                <button 
                     className="button-edit task-button"
                     onClick={()=> handleEdit(todo)}
                     >
                     <CiEdit />
                </button>
                <button 
                  className="button-delete task-button"
                  onClick={()=> handleDelete(todo)}
                >
                  <MdDelete />
                </button>

              </div>
          </li>
        ))
      }
    </div>
  )
}

export default TodosList