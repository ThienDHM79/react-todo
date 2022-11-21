import logo from './logo.svg';
import React, { useState, useRef } from 'react';
import './App.css';
import TodoList from './TodoList';
function App() {
  const [todos, setTodos] = useState([{id:1, name:'To do 1',complete: false},
{id:1, name:'To do 2', complete: true}])
  const todoNameRef = useRef()
  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if (name === '') return
    console.log(name)
  }

  return (
    <>
      <TodoList todos={todos} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add todo</button>
      <button>Clear completed</button>
      <div>0 left to do</div>
    </>
    

  )
}

export default App;
