import React from 'react';
import './App.css';
import TodoList from './Todolist';
import CounterApp from './CounterApp';
import RandomNumberGenerator from './RandomNumberGenerator';
const App = () => {
  return (
    <div>
      <h1>My react app</h1>
      <TodoList />
      <CounterApp />
      <RandomNumberGenerator />
    </div>
  );
};

export default App;
