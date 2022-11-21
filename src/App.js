import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
function App() {
  const [todos, setTodos] = useState(['To do 1','To do 2'])
  return (
    <>
      <TodoList todos={todos} />
      <input type="text" />
      <button>Add todo</button>
      <button>Clear completed</button>
      <div>0 left to do</div>
    </>
    

  )
}

export default App;
