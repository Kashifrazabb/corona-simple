import axios from 'axios';
export const Fetch=async ()=>{
    const {data:{Global:{TotalConfirmed,TotalRecovered,TotalDeaths},Date}}=await axios.get('https://api.covid19api.com/summary')
    return {TotalConfirmed,TotalRecovered,TotalDeaths,Date}
}
