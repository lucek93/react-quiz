import React from 'react';

const Result = ({ score, restart }) => {
    return (
        <div className="result">
            <h1>Koniec Quizu</h1>
            <h2>Wynik: {score}</h2>
            <button className="btn restart rounded" onClick={restart}><span className="text-green">Restart</span></button>
        </div>
    )
}

export default Result;