import React from 'react';
import Answer from '../coponents/Answer';

const Answers = ({ answers, checkAnswer, disableButtons, correctAnswer, finishQuiz, nextQuestion, number }) => {



    return (
        <div className="answers">
            {answers.map((answer, index) => (
                <Answer
                    key={index}
                    id={index}
                    text={answer}
                    checkAnswer={checkAnswer}
                    disableButtons={disableButtons}
                    correctAnswer={correctAnswer}
                />
            ))}

            {number + 1 === 10 ? <button className="btn next-btn" onClick={finishQuiz}>Koniec Quizu</button> : <button className="btn next-btn" onClick={nextQuestion}>Następne pytanie</button>}

        </div>
    )
}

export default Answers;