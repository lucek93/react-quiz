import React from 'react';

const Answer = ({ correctAnswer, disableButtons, checkAnswer, text, id }) => {

    if (disableButtons) {
        return (
            <button
                style={correctAnswer === text ? { backgroundColor: '#4FB94F', border: '5px solid green' } : { border: '2px solid red' }}
                className="btn answer-btn"
                id={id}
                disabled>{text}</button>)
    }

    return (
        <button className="btn answer-btn" id={id} onClick={checkAnswer}>{text}</button>
    )
}

export default Answer;