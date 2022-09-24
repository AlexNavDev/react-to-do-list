import React from 'react';
import './App.css';
import TodoApp from './components/TodoApp';
import { TodoProvider } from './context/TodoContext';


function App() {
  return (
    <div className="App">
      <TodoProvider>
      <TodoApp/>
      </TodoProvider>
    </div>
  )
}

export default App
