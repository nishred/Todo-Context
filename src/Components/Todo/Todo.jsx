import React from "react";
import "./Todo.css"


export const style = {

  border : "1px solid black",
  padding : "8px 16px"

}


const Todo = ({text,status,onComplete,onDelete}) => {


   return (

     <li className="todo-list-item">
     {<input type="checkbox" checked={status}  />}
     <h1>{text}</h1>
     {!status && (<button style={style}  onClick={onComplete}>Mark as Complete</button>)}
     <button onClick={onDelete} style={style}>Delete</button>
     </li>

   )


}

export default Todo