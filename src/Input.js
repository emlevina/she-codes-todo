import React, { useState } from 'react';
import styles from './Input.module.css';
import { connect } from 'react-redux';
import { addTask } from './actions';


const Input = (props) => {
    const [ input, setInput ] = useState('')
    
    const onChange = (e) => {
        setInput(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.addTask(input)
        setInput('')
    }

    return (
        <form onSubmit={onSubmit} className={styles.form}> 
            <input 
            value={input} 
            onChange={onChange} 
            className={styles.inputTask} 
            placeholder='Type your task here'/>
            <button className={styles.button} >submit</button>
        </form>
    )
    
   
}

const mapDispatchToProps = (dispatch) => {
    return {
      addTask: (task) => dispatch(addTask(task))
    }
  }

export default connect(null, mapDispatchToProps)(Input);