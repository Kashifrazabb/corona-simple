import React from 'react'

const Select = ({countries,selectValue,handleSelect}) => {
    return (
        <div className='container select-container'>
            <select onChange={handleSelect} value={selectValue} className='form-control shadow'>
                <option value="Global">Global</option>
                {countries.map(country=><option value={country}>{country}</option>)}
            </select>
        </div>
    )
}

export default Select;
