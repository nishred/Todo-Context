import React, { useState } from "react";
import "./Todo.css"


export const style = {

  border : "1px solid black",
  padding : "8px 16px"

}


const Todo = ({text,status,onComplete,onDelete,onUpdate}) => {

   const [isEditing,setIsEditing] = useState(false)

   const [todoText,setTodoText] = useState(text)

   return (

     <li className="todo-list-item">
     {<input type="checkbox" checked={status}  />}
     {!isEditing && (<h1>{text}</h1>)}
     {isEditing && (<input style={{width : "100%",boxSizing : "border-box",padding : "10px 16px"}} type="text" value={todoText} onChange={(e) => {

         setTodoText(e.target.value)

     }}/>)}
     {!status && (<button style={style}  onClick={onComplete}>Mark as Complete</button>)}
     <button style={style}  onClick={() => {

        if(!isEditing)
        {
            setIsEditing(true)
        }
        else{

             onUpdate(todoText)
             setTodoText("")
             setIsEditing(false)
        }

     }}>{(isEditing)?("Save"):("Edit")}</button>
     <button onClick={onDelete} style={style}>Delete</button>
     </li>

   )


}

export default Todo