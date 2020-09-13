import React from 'react';

const Result = (props) => {
    return (
        <div className="result">
            <h1>Koniec Quizu</h1>
            <h2>Wynik: {props.score}</h2>
            <button className="btn restart rounded" onClick={props.restart}><span className="text-green">Restart</span></button>
        </div>

    )

}

export default Result;