import React, { useState } from "react";
import { style } from "../Todo/Todo";


const AddTodo = ({addTodo,setShow}) => {

  const [text,setText] = useState("")

   return (

      <form onSubmit={(e) => {

       e.preventDefault()

       addTodo(text)

       setText("")

       setShow(false)
  

      }}>
      
       <textarea style={{width : "100%",boxSizing : "border-box"}}  type = "text"  value={text} onChange={(e) => {
 
           setText(e.target.value)

       }} />

       <button style={{...style,display : "block",margin : "0px auto"}}  type="submit">Create</button>

      </form>
 

   )


}

export default AddTodo