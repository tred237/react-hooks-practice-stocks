import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({ stocksList, portfolioList, onBuyStock, onSellStock, onSort, onFilter }) {

  return (
    <div>
      <SearchBar stocksList={stocksList} onSort={onSort} onFilter={onFilter}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocksList={stocksList} onBuyStock={onBuyStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioList={portfolioList} onSellStock={onSellStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
