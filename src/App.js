import React,{useEffect, useState} from 'react';
import {Fetch} from './components/Fetch';
import Header from './components/Header';
import Result from './components/Result';
import Select from './components/Select';

function App() {
  const [data,setData]=useState({});

  useEffect (async ()=>{
    setData(await Fetch())
  },[])
  console.log(data)
  return (
    <>
        <Header/>
        <Select/>
        <Result data={data}/>
    </>
  );
}

export default App;
