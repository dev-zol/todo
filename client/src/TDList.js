import React, { useState } from 'react';
import "./style/skeleton.css";

const TDList = () => {
    const [state, setState] = useState({
        name: '',
        task: ''
      });
    const sendData = event => {
        event.preventDefault();

        console.log('We will fill this up shortly.');
    };

    const onInputChange = event => {
        const { name, value } = event.target;

        setState({
            ...state,
            [name]: value
        });
    };
    
    return (
        <div className="container">
            <div className="row">
                <h1>To Do List</h1>
            </div>
            <form className="form" onSubmit={sendData}>
                <div className="row">
                    <div className="row">
                        <label htmlFor="name-input">Name</label>
                        <input className="half-width" type="text" name="name" value={state.name} onChange={onInputChange}/> 
                    </div>
                    <div className="row">
                        <label htmlFor="text-input">Task</label>
                        <input className="half-width" type="text" name="task" value={state.task} onChange={onInputChange}/>
                    </div>
                    <div className="row">
                        <input className="button-primary" type="submit" value="Submit" />
                    </div>
                </div> 
            </form> 
        </div>
    );
};

export default TDList