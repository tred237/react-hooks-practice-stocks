import React, { useState, useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  const [allStocks, setAllStocks] = useState([])
  const [stocksList, setStocksList] = useState([])
  const [portfolioList, setPortfolioList] = useState([])

  useEffect(() => {
    pullStockData()
  },[])

  function pullStockData(){
    fetch('http://localhost:3001/stocks')
    .then(res => res.json())
    .then(stocks => {
      setStocksList(stocks)
      setAllStocks(stocks)
    })
  }

  function handleBuyStock(stock){
    const hasStock = portfolioList.filter(portfolioStock => portfolioStock.id === stock.id)
    if(hasStock.length === 0) setPortfolioList([stock,...portfolioList])
  }

  function handleSellStock(stock){
    const newPortfolioList = portfolioList.filter(portfolioStock => portfolioStock.id !== stock.id)
    setPortfolioList(newPortfolioList)
  }

  function handleSort(stockList){
    setStocksList(stockList)
  }

  function handleFilter(filterValue){
    const newStockList = allStocks.filter(stock => stock.type === filterValue)
    setStocksList(newStockList)
  }

  return (
    <div>
      <Header />
      <MainContainer stocksList={stocksList} portfolioList={portfolioList} onBuyStock={handleBuyStock} onSellStock={handleSellStock} onSort={handleSort} onFilter={handleFilter}/>
    </div>
  );
}

export default App;
