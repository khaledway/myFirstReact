import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import PropTypes from 'prop-types';



import Score from './Exercise6/Score';
import Game from './Exercise6/Game';

let tempVal1 = Math.floor(Math.random() * 100);
let tempVal2 = Math.floor(Math.random() * 100);
let tempVal3 = Math.floor(Math.random() * 100);

class App extends Component {





    state = {
        numQuestions: 0,
        correctAnswer: 0,

        value1: tempVal1,
        value2: tempVal2,
        value3: tempVal3,

        proposedAnswer: tempVal1 + tempVal2 + tempVal3 +Math.floor(Math.random() * 3),

       

    }

       
    updateScoreAndAnswer = answerWasCorrect => {
    
        if (answerWasCorrect)
        {
            this.setState((currState) =>
            ({
                correctAnswer : currState.correctAnswer + 1,
            }))
        }

        this.setState((currState) => ({
            numQuestions: currState.numQuestions + 1,
        }))


        this.setState((currState) => ({
            value1: Math.floor(Math.random() * 100)
        }))

        this.setState((currState) => ({
            value2: Math.floor(Math.random() * 100)
        }))
        this.setState((currState) => ({
            value3: Math.floor(Math.random() * 100)
        }))
        this.setState((currState) => ({
            proposedAnswer: currState.value1 + currState.value2 + currState.value3 + +Math.floor(Math.random() * 3)
        }))
    };

    



    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">ReactND - Coding Practice</h1>
                </header>
                <div className="game">
                    <h2>Mental Math</h2>

                    
                    <Game value1={this.state.value1} value2={this.state.value2} value3={this.state.value3} proposedAnswer={this.state.proposedAnswer}
                        updateScoreAndAnswer={this.updateScoreAndAnswer}
                    />


                    <Score numCorrect={this.state.correctAnswer} numQuestions={this.state.numQuestions}
                    />
                </div>
            </div>
        );
    }
}

export default App;
