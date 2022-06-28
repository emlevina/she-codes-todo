import React from 'react';

function Task(props){
    const styleDone = {textDecorationLine: 'line-through', textDecorationStyle: 'solid'};
    const styleUndone = {color: "blue"};

    const onChange = (e) => {
        props.checkTask(props.task.id, e.target.checked);
    };

    const deleteTask = (e) => {
        props.deleteTask(props.task.id);
    }
    return (
        <div> 
            <input type="checkbox" onChange={onChange}/><span style={props.task.done ? styleDone : styleUndone}>{props.task.content}</span>
            <button onClick={deleteTask}>Delete</button>
        </div>
    )
}

export default Task;