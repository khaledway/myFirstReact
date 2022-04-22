


import React, { Component } from "react";
import PropTypes from 'prop-types';

class Score extends Component {
    render() {

        const { numCorrect, numQuestions } = this.props;




        return <p className="text">
            Your Score: {numCorrect}/{numQuestions}
        </p>

    }
}


Score.propTypes = {

    numCorrect: PropTypes.number.isRequired,

}


export default Score;
