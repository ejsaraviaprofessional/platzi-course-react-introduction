import React from 'react'
import './TodoSearch.css'
import { TodoContext } from "../../providers/TodoContext";

export function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext)
  

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <>
      <input 
        className="TodoSearch" 
        placeholder="search" 
        value={searchValue}
        onChange={onSearchValueChange}
      />
      <p>{searchValue}</p>
    </>
  )
}
