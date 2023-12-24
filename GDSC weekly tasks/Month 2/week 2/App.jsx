import React from 'react';
import './App.css';
import TodoList from './Todolist';
import CounterApp from './CounterApp';
import RandomNumberGenerator from './RandomNumberGenerator';
//import Index from './index';
import Todo from './todo';
//import blog from './blog';

import ShoppingCart from '../ShoppingCart';
import Home from './blog';
import NoteApp from './notetakingapp';
import RegistrationForm from './RegistrationForm';

function App() {
 

  return (
    <div className="App" >
      <todo/>
     {/*  <h1>My react app</h1>

      <TodoList />
      <CounterApp />
      <RandomNumberGenerator /> */}
    
    <ShoppingCart />
    <RegistrationForm />
    <Home />
    <NoteApp />
      
     
    </div>
  );
};

export default App;
