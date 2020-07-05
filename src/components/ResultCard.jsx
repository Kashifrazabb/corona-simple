import React from 'react';

const ResultCard = ({color,type,about,number,date}) => {
    return (
        <div className={`col-md-3 position-relative result-card result-card-color-${color}`}>
            <h3>{type}</h3>
            <h1>{number}</h1>
            <div className='fixed-bottom position-absolute mx-auto w-75 text-center'>
                <p><b>Updated:</b> {new Date(date).toDateString()}</p>
                <p>{about}<b>COVID-19</b></p>
            </div>
        </div>
    )
}

export default ResultCard;
