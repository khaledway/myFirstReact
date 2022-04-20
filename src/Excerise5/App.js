import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Score from './Excerise5/Score';

const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;




class App extends Component {

    state = {
        numQuestions: 0,
        numCorrect: 0,




    }


    IncrementSore = () => {

        this.setState(() => ({

            numQuestions: this.state.numQuestions + 1,
            numCorrect: this.state.numCorrect + 1,

        }))

    }





    DecrementSore = () => {
        this.setState(() => ({

            numQuestions: this.state.numQuestions + 1,
            numCorrect: this.state.numCorrect - 1,

        }))
    }




    //TestIncrementSore = () => {

    //    this.setState(() => ({

    //        numQuestions: this.state.numQuestions + 1,
    //        numCorrect: this.state.numCorrect + 1,

    //    }))
    //}

    TestIncrementSore = () => {
        this.setState({                                 // remove "=" 
            numQuestions: this.state.numQuestions + 1,
            numCorrect: this.state.numCorrect + 1,
        })
        console.log('Parent State ' + this.state.numQuestions);
        //parent's state is updating 
    }




    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">ReactND - Coding Practice</h1>
                </header>
                <div className="game">
                    <h2>Mental Math</h2>
                    <div className="equation">
                        <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
                    </div>


                    <Score numCorrect={this.state.numCorrect} numQuestions={this.state.numQuestions}
                        onTrueFunction={this.IncrementSore}
                        onFalseFunction={this.DecrementSore}
                        onTest={this.TestIncrementSore}

                    />
                </div>
            </div>
        );
    }
}

export default App;
