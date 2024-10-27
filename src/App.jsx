import { useState } from 'react'
import './App.css'
import TodoList from './Components/TodoList/TodoList'
import AddTodo from './Components/AddTodo/AddTodo'
import { style } from './Components/Todo/Todo'

const dummyTodos = [

{id : 0,text : "Go to Gym", status : true},
{id : 1,text : "Grind like a maniac", status : false},
{id : 2,text : "Grind is the only thing that matters", status : false},
{id : 3,text : "Everything else is useless man", status : true}


]


function App() {
 
  const [todos,setTodos] = useState(dummyTodos)

  const [show,setShow] = useState(false)

  function completeTodo(id)
  {

      const nextTodos = todos.map((todo) => {

           if(todo.id === id)
           {
              const nextTodo = {...todo}
              nextTodo.status = true

              return nextTodo
           }
           else
           return todo


      })


      setTodos(nextTodos)


  }

  function deleteTodo(id)
  {

   const nextTodos = todos.filter((todo) => {

        return todo.id !== id
     
   })

   setTodos(nextTodos)


  }

  function addTodo(text)
  {
     const nextTodos = [...todos,{id : todos.length,text : text,status : false}]

     setTodos(nextTodos)

  }


  function updateTodo(id,todoText)
  {

     const nextTodos = todos.map((todo) => {

         if(todo.id === id)
         {
 
             const nextTodo = {...todo}
             nextTodo.text = todoText

             return nextTodo

         }
         else
         return todo

     })


     setTodos(nextTodos)



  }



  return (
    <div style={{width : "fit-content",color : "wheat"}}>
     <TodoList todos={todos} completeTodo = {completeTodo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
     {show && (<AddTodo addTodo={addTodo} setShow={setShow}/>)}
     {!show && (<button onClick={() => {
         setShow(true)
     }} style={style}>Add Todo</button>)}
    </div>
  )
}

export default App
