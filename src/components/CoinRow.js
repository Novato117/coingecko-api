import axios from "axios";
import { useEffect, useState } from "react";
function CryptoPrices() {
    const [prices, setPrices] = useState({})

    const fetchPrices = async () => {
        try {
            const res = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin,moonbeam,moonriver,chainlink&vs_currencies=usd');
            console.log(res.data)
            setPrices(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        const intervalId = setInterval(fetchPrices, 50000);
        return () => clearInterval(intervalId)
    }, []);
    return (
        <div>
            <h2>cryptocurrency prices</h2>
            <p> Bitcoin : {prices.bitcoin?.usd}</p>
            <p>Ethereum: {prices.ethereum?.usd}</p>
            <p>Litecoin: {prices.litecoin?.usd}</p>
            <p>moonbeam: {prices.moonbeam?.usd}</p>
            <p>moonriver: {prices.moonriver?.usd}</p>
            <p>chainlink: {prices.chainlink?.usd}</p>
            <p>precio producto: $5 usd : ${(5 / prices.moonbeam?.usd)} GLM</p>
        </div>
    )
}
export default CryptoPrices;
