import React from "react";

function Stock({ stock, onBuyStock, onSellStock, sell }) {
  const buttonText = sell ? 'Sell' : 'Buy'

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
          <button id={stock.ticker} onClick={() => sell ? onSellStock(stock) : onBuyStock(stock)}>{buttonText}</button>
        </div>
      </div>
    </div>
  );
}
export default Stock;
