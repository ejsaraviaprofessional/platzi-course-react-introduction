import './App.css';

import React from 'react'
import { AppUI } from './AppUI';
import { todos as defaultTodos } from '../data/todos';

function App({ }) {
  const localStorageTodos = localStorage.getItem('TODOS_V1');

  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
    parsedTodos = defaultTodos
  } else {
    parsedTodos = JSON.parse(localStorageTodos)
  }

  const [todos, setTodos] = React.useState(parsedTodos)
  const [searchValue, setSearchValue] = React.useState('')
  
  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  let searchedTodos = []

  if (searchValue.length > 0) {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLocaleLowerCase()
      const searchText = searchValue.toLocaleLowerCase()
      return todoText.includes(searchText)
    })
  } else {
    searchedTodos = todos
  }
  
  const updateStorage = (items) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(items));
    setTodos(items)
  }

  const completeTodo = (key) => {
    const todoIndex = todos.findIndex(todo => todo.text === key)

    const newTodos = [...todos]
    newTodos[todoIndex].completed = true
    updateStorage(newTodos)
   
  }

  const deleteTodo = (key) => {
    const todoIndex = todos.findIndex(todo => todo.text === key)

    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    updateStorage(newTodos)
    
  }
  return (
    <AppUI 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos ={searchedTodos }
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
