import React from 'react';
import ResultCard from './ResultCard';

const Result = ({selectValue,country:{ Confirmed,Recovered,Deaths,Date},global:{TotalConfirmed,TotalRecovered,TotalDeaths}}) => {
    return (
        <div className='container mt-5'>
            <div className="row justify-content-between">
                    <ResultCard color='red' type='Infected' number={selectValue==='Global'?TotalConfirmed:Confirmed} date={Date} about='Number of Infected Cases by ' />
                    <ResultCard color='blue' type='Recovered' number={selectValue==='Global'?TotalRecovered:Recovered} date={Date} about='Number of Recovered Cases from '/>
                    <ResultCard color='green' type='Death' number={selectValue==='Global'?TotalDeaths:Deaths} date={Date} about='Number of Deaths caused by '/>
            </div>
        </div>
    )
}

export default Result;
