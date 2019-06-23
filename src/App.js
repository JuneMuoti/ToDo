import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import MyInfo from './components/MyInfo'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Main from './components/Main'
import TodoItem from './components/TodoItem'

function App() {
  return (
    <div className="todo-list">
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
</div>
  )
}

export default App;
