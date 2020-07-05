import React from 'react';
import ResultCard from './ResultCard';

const Result = ({country:{ Confirmed,Recovered,Deaths,Date}}) => {
    return (
        <div className='container mt-5'>
            <div className="row justify-content-between">
                    <ResultCard color='red' type='Infected' number={Confirmed} date={Date} about='Number of Infected Cases by ' />
                    <ResultCard color='blue' type='Recovered' number={Recovered} date={Date} about='Number of Recovered Cases from '/>
                    <ResultCard color='green' type='Death' number={Deaths} date={Date} about='Number of Deaths caused by '/>
            </div>
        </div>
    )
}

export default Result;
