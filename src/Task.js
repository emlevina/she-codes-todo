import React from 'react';
import styles from './Task.module.css';
import { connect } from 'react-redux';
import { deleteTask, checkTask } from './actions';

const Task = (props) => {
    const onChange = (e) => {
        props.checkTask(props.task.id);
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

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (id) => dispatch(deleteTask(id)),
        checkTask: (id) => dispatch(checkTask(id))
    }
}

export default connect(null, mapDispatchToProps)(Task);