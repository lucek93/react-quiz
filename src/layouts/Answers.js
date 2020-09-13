import React from 'react';
import Answer from '../coponents/Answer';

const Answers = (props) => {

    // const answers = props.answers.sort(() => Math.random() - 0.5);
    const answers = props.answers;



    return (
        <div className="answers">
            {answers.map((answer, index) => (
                <Answer
                    key={index}
                    id={index}
                    text={answer}
                    checkAnswer={props.checkAnswer}
                    disableButtons={props.disableButtons}
                    correctAnswer={props.correctAnswer}
                />
            ))}

            {props.number + 1 === 10 ? <button className="btn next-btn" onClick={props.finishQuiz}>Koniec Quizu</button> : <button className="btn next-btn" onClick={props.nextQuestion}>Następne pytanie</button>}

        </div>
    )
}

export default Answers;