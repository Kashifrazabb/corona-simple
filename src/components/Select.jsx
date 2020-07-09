import React from 'react';

const Select = ({countries,CountryCode,selectValue,handleSelect}) => {
    return (
        <div className='container select-container'>
            <select onChange={handleSelect} value={selectValue} className='form-control shadow'>
                <option value="Global"> Global</option>
                {countries.map(country=><option value={country}>{country}</option>)}
            </select>
            {CountryCode?
            <div className='text-center mt-5'>
                <img src={`https://www.countryflags.io/${CountryCode}/flat/64.png`} alt='Flag'/>
            </div>:null}
        </div>
    )
}

export default Select;
