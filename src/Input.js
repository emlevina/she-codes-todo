import React from 'react';

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
            <form onSubmit={this.onSubmit}> 
                <input value={this.state.input} onChange={this.onChange}/>
                <button>submit</button>
            </form>
        )
    }
   
}

export default Input;