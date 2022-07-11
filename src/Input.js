import React, { useState } from 'react';
import styles from './Input.module.css';
import { connect } from 'react-redux';
import { addTask } from './actions';


const Input = (props) => {
    const [ input, setInput ] = useState('')

    const onFocus = (e) => {
        if(!input){
            setInput('$')
            e.currentTarget.setSelectionRange(input.length+1, input.length+1) 
        }
    }
    
    const onBlur = () => {
        if(input.length === 1){
            setInput('') //чтобы пропадал значок, если ничего так и не ввели
        }
    }

    const onChange = (e) => {
        if(e.target.value === '$'){
            setInput('') //на случай когда удаляют последнюю цифру, чтобы доллар пропал. хотя мб это и не надо
        } else if (e.target.value.length === 1){
            setInput('$' + e.target.value) // на случай когда ручками удаляют, а потом продолжают печатать
        } else {
            setInput(e.target.value)
        }
        
    }

    const onSubmit = (e) => {
        e.preventDefault();
        //setInput(input.slice(1))
        props.addTask(input.slice(1))
        setInput('')
    }

    return (
        <form onSubmit={onSubmit} className={styles.form}> 
            <input 
            value={input} 
            onChange={onChange} 
            onFocus={onFocus}
            onBlur={onBlur}
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