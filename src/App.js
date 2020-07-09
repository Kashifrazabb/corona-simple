import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Result from './components/Result';
import Select from './components/Select';
import axios from 'axios';

const App = () => {
  const [countries, setCountries] = useState();
  const [data, setData] = useState();
  const [global, setGlobal] = useState();
  const [date, setDate] = useState();
  const [selectValue, setSelectValue] = useState('Global');

  const handleSelect = (e) => setSelectValue(e.target.value)

  useEffect(() => {

    (async () => {
      const DATA = (await axios.get('https://api.covid19api.com/summary')).data;
      setCountries(DATA.Countries.map(c => c.Country))
      setData(DATA.Countries)
      setGlobal(DATA.Global)
      setDate(DATA.Date)

    })()

  }, [])


  if (data) {

    const INDEX = data.findIndex(i => i.Country === selectValue);
    var TotalConfirmed, TotalRecovered, TotalDeaths, CountryCode;
    if (selectValue !== 'Global') {
      TotalConfirmed = data[INDEX].TotalConfirmed;
      TotalRecovered = data[INDEX].TotalRecovered;
      TotalDeaths = data[INDEX].TotalDeaths;
      CountryCode = data[INDEX].CountryCode;
    }
    else if (selectValue === 'Global' && global) {
      TotalConfirmed = global.TotalConfirmed;
      TotalRecovered = global.TotalRecovered;
      TotalDeaths = global.TotalDeaths;
    }

  }

  return (
    <>
      <Header />
      <Select countries={countries ? countries : ['Loading....']} handleSelect={handleSelect}
        selectValue={selectValue} CountryCode={CountryCode} />
      <Result TotalConfirmed={TotalConfirmed} TotalRecovered={TotalRecovered}
        TotalDeaths={TotalDeaths} date={date} />
    </>
  );
}

export default App;
