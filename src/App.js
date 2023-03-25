import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import TableCoins from './components/TableCoins';
function App() {
  /**
   * add 100 data to coins
   */
  const [coins, setCois] = useState([])
  const getData = async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    console.log(res.data)
    setCois(res.data)
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <div className="container">
      <div className='row'>

        <TableCoins coins={coins} />
      </div>
    </div>
  );
}

export default App;
