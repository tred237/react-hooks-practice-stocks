import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolioList, onSellStock }) {
  return (
    <div>
      <h2>My Portfolio</h2>
        {portfolioList.map(stock => <Stock key={stock.id} stock={stock} onSellStock={onSellStock} sell={true} />)}
    </div>
  );
}

export default PortfolioContainer;
