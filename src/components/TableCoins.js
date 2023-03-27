import React from "react";
const TableCoins = ({ coins }) => {
const titles = ["#", "coin", "price", "price change", "24h volume"];
    return (
        <table className="table table-dark mt-4 table-hover">
            <thead>
                <tr>
                     {titles.map((title) => (
                        <td>{title}</td>
                    ))}
                </tr>
            </thead>
            <tbody>
               {coins.map((coin, index) => (
                    <CoinRow coin={coin} key={index} index={index + 1}></CoinRow>
                ))}
            </tbody>
        </table>
    )
}
export default TableCoins;
