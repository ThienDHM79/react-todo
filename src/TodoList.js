import React from 'react'
import Todo from './Todo'
export default function TodoList( {todos} ) {
  return (
      
    todos.map(todo => {
      //add key to only re-render element that change
      return <Todo key={todo.id} todo = {todo}/>
    })
  )
}
