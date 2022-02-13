import React from 'react'

export function useLocalStorage (itemName, initialValue) {
  const [error, setError] = React.useState(false)
  const [loading, setLoading] = React.useState(true)
  const [item, setItem] = React.useState(initialValue)

  React.useEffect(() => {
    try {
      setTimeout(() => {
        const localStorageItem = localStorage.getItem(itemName);
  
        let parsedItem;
  
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }
        setItem(parsedItem)
        setLoading(false)
      }, 5000)
    } catch (error) {
      setError(error)
    }
  }, [])

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem)
    } catch (error) {
      setError(error)
    }
  }

  return {
    item,
    saveItem,
    loading,
    error
  }
}