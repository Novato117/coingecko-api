function CoinRow({ coin, index }) {
    console.log(coin, index)
    return (
        <tr>
            <td>{index}</td>
            <td>
                <img src={coin.image} alt={coin.name} style={{ width: '6%' }} className="me-4" />
                <span>{coin.name}</span>
                <span className="ms-3 text-muted">{coin.symbol}</span>
            </td>
            <td>{coin.current_price}</td>
            <td>{coin.price_change_percentage_24h}</td>
            <td>{coin.total_volume}</td>
        </tr>
    )
}

export default CoinRow;
