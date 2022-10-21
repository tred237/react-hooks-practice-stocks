import React from "react";
import Stock from "./Stock";

function StockContainer({ stocksList, onBuyStock }) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocksList.map(stock => <Stock key={stock.id} stock={stock} onBuyStock={onBuyStock} />)}
    </div>
  );
}

export default StockContainer;
