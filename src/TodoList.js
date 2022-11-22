import React from 'react'
import Todo from './Todo'
export default function TodoList( {todos, toggleTodo} ) {
  return (
      
    todos.map(todo => {
      //add key to only re-render element that change
      return <Todo key={todo.id} toggleTodo = {toggleTodo} todo = {todo}/>
    })
  )
}
