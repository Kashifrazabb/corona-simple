import React from 'react';
import ResultCard from './ResultCard';

const Result = ({data:{TotalConfirmed,TotalRecovered,TotalDeaths,Date}}) => {
    return (
        <div className='container mt-5'>
            <div className="row justify-content-between">
                    <ResultCard color='red' type='Infected' number={TotalConfirmed} about='Number of Infected Cases by ' date={Date}/>
                    <ResultCard color='blue' type='Recovered' number={TotalRecovered} about='Number of Recovered Cases from '  date={Date}/>
                    <ResultCard color='green' type='Death' number={TotalDeaths} about='Number of Deaths caused by '  date={Date}/>
            </div>
        </div>
    )
}

export default Result;
