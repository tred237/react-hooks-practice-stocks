import React, { useState } from "react";

function SearchBar({ stocksList, onSort, onFilter }) {
  const [nameSortChecked, setNameSortChecked] = useState(false)
  const [priceSortChecked, setPriceSortChecked] = useState(false)

  function handleFilterChange(e){
    onFilter(e.target.value)
  }

  function handleSortChange(e){
    const newStocksList = [...stocksList]

    if(e.target.value === 'Alphabetically'){
      nameSort(newStocksList)
      setNameSortChecked(true)
      setPriceSortChecked(false)
    } 
    
    if(e.target.value === 'Price'){
      priceSort(newStocksList)
      setPriceSortChecked(true)
      setNameSortChecked(false)
    }
    onSort(newStocksList)
  }

  function nameSort(newStocksList){
    newStocksList.sort((a,b) => {
      const nameA = a.name.toLowerCase()
      const nameB = b.name.toLowerCase()
      if(nameA < nameB) return -1
      else if(nameA > nameB) return 1
      else return 0
    })
  }

  function priceSort(newStocksList){
    newStocksList.sort((a,b) => a.price - b.price)
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={nameSortChecked}
          onChange={handleSortChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={priceSortChecked}
          onChange={handleSortChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilterChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
