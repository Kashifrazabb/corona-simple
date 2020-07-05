import React from 'react';

const Select = ({handleSelect,selectValue,countries}) => {

    return (
        
        <div className='container select-container '>
            <select onChange={handleSelect} value={selectValue} className='float-right form-control shadow'>
                <option value="" disbaled selected>Select Country</option>
                {countries.map(i=><option value={i}>{i}</option>)}
            </select>
        </div>
    )
}

export default Select;
