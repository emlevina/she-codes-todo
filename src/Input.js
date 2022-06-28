import React from 'react';
import styles from './Input.module.css';

class Input extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: ''
        }
    }
    onChange = (e) => {
        this.setState({ input: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.input);
        this.setState({ input: '' })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className={styles.form}> 
                <input 
                value={this.state.input} 
                onChange={this.onChange} 
                className={styles.inputTask} 
                placeholder='Type your task here'/>
                <button className={styles.button} >submit</button>
            </form>
        )
    }
   
}

export default Input;