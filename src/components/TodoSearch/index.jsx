import React from 'react'
import './TodoSearch.css'

export function TodoSearch(props) {
  

  const onSearchValueChange = (event) => {
    props.setSearchValue(event.target.value)
  }

  return (
    <>
      <input 
        className="TodoSearch" 
        placeholder="search" 
        value={props.searchValue}
        onChange={onSearchValueChange}
      />
      <p>{props.searchValue}</p>
    </>
  )
}
