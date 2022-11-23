import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//create new root -> clear local storage
/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/
//just render
ReactDOM.render(<App />, document.getElementById('root'));
