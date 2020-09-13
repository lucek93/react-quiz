import React from 'react';

const Answer = (props) => {
    const correctAnswer = props.correctAnswer;


    if (props.disableButtons) {
        return <button style={correctAnswer === props.text ? { backgroundColor: '#4FB94F', border: '5px solid green' } : { border: '2px solid red' }} className="btn answer-btn" id={props.id} disabled>{props.text}</button>
    }

    return (
        <button className="btn answer-btn" id={props.id} onClick={props.checkAnswer}>{props.text}</button>
    )
}


export default Answer;