import React from 'react';
import '../styles/Progress.scss';

const Progress = (props) => {
    const questions = 10;

    return (
        <div className="progress" >
            <p>Wynik: {props.score}</p>
            <div className="given-answers">
                {props.givenAnswers.map((givenAnswer, index) => {
                    if (givenAnswer === "ok") {
                        return <button className="mark" key={index}>✔️</button>
                    } else if (givenAnswer === "nok") {
                        return <button className="mark" key={index}>❌</button>
                    }
                })}
            </div>
            <p>Pytanie {props.questionNumber + 1} / {questions}</p>
        </div>
    )
}

export default Progress;