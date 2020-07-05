import React,{useEffect, useState} from 'react';
import Header from './components/Header';
import Result from './components/Result';
import Select from './components/Select';
import axios from 'axios';

function App() {
  const [country,setCountry]=useState('');
  const [countries,setCountries]=useState([]);
  const [selectValue,setSelectValue]=useState('');

  const handleSelect=(e)=>{
    setSelectValue(e.target.value)
  }

  useEffect (()=>{

    (async ()=>{
    const res1=await axios.get('https://api.covid19api.com/countries');
    const res2=await axios.get(`https://api.covid19api.com/country/${selectValue}`);
    const COUNTRIES=res1.data.map(i=>i.Country);
    const COUNTRY=res2.data.slice(-1).pop();
    setCountries(COUNTRIES);
    setCountry(COUNTRY);
  
    })();
  },[selectValue])

  return (
    <>
        <Header/>
        <Select handleSelect={handleSelect} selectValue={selectValue} 
        countries={countries}/>
        <Result country={country}/>
    </>
  );
}

export default App;
