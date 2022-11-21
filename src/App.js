import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
function App() {
  return (
    <>
      <TodoList />
      <input type="text"></input>
      <button>Add todo</button>
      <button>Clear completed</button>
      <div>0 left to do</div>
    </>
    

  )
}

export default App;
