import React from 'react';

const Select = ({handleSelect,selectValue,countries}) => {

    return (
        
        <div className='container select-container '>
            <select onChange={handleSelect} value={selectValue} className='float-right shadow'>
                <option value="" disbaled selected>Select Country</option>
                <option value="pakistan">Pakistan</option>
                {countries.map(i=><option value={i}>{i}</option>)}
            </select>
        </div>
    )
}

export default Select;
