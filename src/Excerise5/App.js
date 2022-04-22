import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Score from './Excerise5/Score';
import Game from './Excerise5/Game';



class App extends Component {

    state = {
        numQuestions: 0,
        correctAnswer: 0,
    }


    IncrementSore = () => {

        this.setState((currState) => ({

            numQuestions: currState.numQuestions + 1,
            correctAnswer: currState.correctAnswer + 1,

        }))

    }

    DecrementSore = () => {
        this.setState((currState) => ({


            numQuestions: currState.numQuestions + 1,
            correctAnswer: currState.correctAnswer

        }))
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

                    <Game onTrueFunction={this.IncrementSore}  onFalseFunction={this.DecrementSore}
                
                    />

                    <Score numCorrect={this.state.correctAnswer} numQuestions={this.state.numQuestions}
                    />
                </div>
            </div>
        );
    }
}

export default App;
