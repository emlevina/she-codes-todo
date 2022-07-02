import React from 'react';
import styles from './Task.module.css';

const Task = (props) => {
    const onChange = (e) => {
        props.checkTask(props.task.id, e.target.checked);
    };

    const deleteTask = (e) => {
        props.deleteTask(props.task.id);
    }
    return (
        <div className={styles.task}> 
            <input type="checkbox" onChange={onChange}/><span className={props.task.done ? styles.taskDone : styles.taskUndone}>{props.task.content}</span>
            <button onClick={deleteTask} className={styles.button}>Delete</button>
        </div>
    )
}

export default Task;