import React, { Component } from "react";





class Game extends Component
{

    constructor(props)
    {
        super(props);
        console.log(props);
    }


    //const EvaluteUserAnwser = () =>
    //{
    //debugger;
    //return this.props.updateScoreAndAnswer(true);
    //};


    EvaluteUserAnwser = event =>
    {
        //const newValuesArray = this.makeNewQuestion();
        //this.updateState(newValuesArray);
        //const answerWasCorrect = this.evaluateAnswer(event.target.name);
        //this.props.handleAnswer(answerWasCorrect);

        /*        answerWasCorrect*/




        let userInput = event.target.name;
        let actualAnswer = false;
        let calc3Values = this.props.value1 + this.props.value2 + this.props.value3;
        let currentPossibleAnswer = this.props.proposedAnswer;

        if (userInput === "true")
        {
            if (calc3Values == currentPossibleAnswer)
            {
                actualAnswer = true;
            }
        }
        else 
        {
            if (calc3Values != currentPossibleAnswer) {
                actualAnswer = true;
            }
        }
        this.props.updateScoreAndAnswer(actualAnswer);
    };



    render() {

        


        const { value1, value2, value3, proposedAnswer} = this.props;


      
        return <div> <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
        </div>
            <button onClick={this.EvaluteUserAnwser} name="true" >True</button>
            <button onClick={this.EvaluteUserAnwser} name="False"  >False</button>
            </div>;

    }
}
export default Game;
