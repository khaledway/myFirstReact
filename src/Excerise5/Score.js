import React, { Component } from "react";

class Score extends Component {
    render() {


        const { numQuestions, numCorrect }  = this.props;

        return <div>


            <button onClick={() => this.props.onTrueFunction()}  >True</button>
            <button onClick={() => this.props.onFalseFunction()} >False</button>


            <button onClick={() => this.props.onTest()} >Test</button>

            

            
            <p className="text">
            Your Score: {numQuestions}/ {numCorrect}
            </p>
            </div>;
        
    }
}

export default Score;
