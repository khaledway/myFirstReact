import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    state =
        {
            inputOfUser: "This should mirror the text you typed into the input field."
        }


    onChangeHandeler = event =>
    {
        debugger;
        let userText = event.target.value;

        this.setState(() =>
        ({
            inputOfUser: userText,
        }))
    }


    render() {


        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">ReactND - Coding Practice</h1>
                </header>
                <div className="container">
                    <input type="text" placeholder="Say Something" onChange={this.onChangeHandeler} />
                    <p className="echo">Echo:</p>
                    <p>{this.state.inputOfUser}</p>
                </div>
            </div>
        );
    }
}

export default App;
