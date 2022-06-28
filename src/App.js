import './App.css';
import React from 'react';
import TasksList from './TasksList';
import Input from './Input';

const listArray = [
  {id: 0, content: "This is an important task", done: false},
  {id: 1, content: "This is alse an important task", done: false},
  {id: 2, content: "This is slightly less an important task", done: false},
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { listArray, idCounter: 3 };
  }
  
  onSubmit = (newTask) => {
    let id = this.state.idCounter;
    let newObj = {id, content: newTask, done: false};
    this.setState(state => {
      return { listArray: [...state.listArray, newObj], idCounter: state.idCounter + 1}
    });
  }

  deleteTask = (id) => {
    console.log('Trying to delete external');
    this.setState(state => {
      return {
        listArray: state.listArray.filter(obj => obj.id !== id)
      }
    })
  }

  checkTask = (id, isChecked) => {
    this.setState(state => {
      return {
        listArray: state.listArray.map(obj => {
              if(obj.id === id){
                return {
                  ...obj,
                  done: isChecked
                } 
              } else {
                return obj
              }
            })
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Input onSubmit={this.onSubmit}/>
        <TasksList tasks={this.state.listArray} deleteTask={this.deleteTask} checkTask={this.checkTask}/>
      </div>
    );
  }
}

export default App;
