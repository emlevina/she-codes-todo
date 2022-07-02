import './App.css';
import React, { useState } from 'react';
import TasksList from './TasksList';
import Input from './Input';

const defaultState = [
  {id: 0, content: "This is an important task", done: false},
  {id: 1, content: "This is alse an important task", done: false},
  {id: 2, content: "This is slightly less an important task", done: false},
]

const App = () => {
  const [ tasks, setTasks ] = useState(defaultState)
  const [ idCount, setIdCount ] = useState(3);

  const deleteTask = (id) => {
    setTasks(oldTasks => oldTasks.filter(obj => obj.id !== id))
  }

  const checkTask = (id, isChecked) => {
    setTasks(oldTasks => oldTasks.map(obj => obj.id === id ? { ...obj, done: isChecked} : obj))
  }

  const onSubmit = (newTask) => {
    let id = idCount;
    let newObj = {id, content: newTask, done: false};
    setTasks(oldTasks => [...oldTasks, newObj]);
    setIdCount(oldIdCount => oldIdCount + 1)
  }

  return (
    <div className="App">
      <Input onSubmit={onSubmit}/>
      <TasksList tasks={tasks} deleteTask={deleteTask} checkTask={checkTask}/>
    </div>
  )
}

export default App;
