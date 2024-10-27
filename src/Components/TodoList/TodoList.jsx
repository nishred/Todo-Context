import React from "react";
import Todo from "../Todo/Todo";

const TodoList = ({todos,completeTodo,deleteTodo,updateTodo}) => {



   return (

     <ul style={{paddingLeft : "0px"}}>
     {todos.map((todo) => {

       return <Todo key={todo.id} text={todo.text} status={todo.status} onComplete = {() => {

         completeTodo(todo.id)

       }}  onDelete = {() => {

         deleteTodo(todo.id)

       }} onUpdate={(todoText) => {
  
          updateTodo(todo.id,todoText)

       }}  />

     })} 
     </ul>

   )


}

export default TodoList