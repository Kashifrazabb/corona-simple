import React from 'react';
import ResultCard from './ResultCard';

const Result = ({TotalConfirmed,TotalRecovered,TotalDeaths,date}) => {

    return (
        <div className='container mt-5'>
            <div className="row justify-content-between">
                    <ResultCard color='red' type='Confirmed' number={TotalConfirmed} date={date} about='Number of Infected Cases by ' />
                    <ResultCard color='blue' type='Recovered' number={TotalRecovered} date={date} about='Number of Recovered Cases from '/>
                    <ResultCard color='green' type='Death' number={TotalDeaths} date={date} about='Number of Deaths caused by '/>
            </div>
        </div>
    )
}

export default Result;
