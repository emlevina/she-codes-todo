import './App.css';
import React from 'react';
import TasksList from './TasksList';
import Input from './Input';

const App = () => {
  return (
    <div className="App">
      <Input/>
      <TasksList/>
    </div>
  )
}

export default App;
