import React from "react";
import { useLocalStorage } from "../../customHooks/useLocalStorage";

const TodoContext = React.createContext()

function TodoProvider (props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V2', [])
  
  const [searchValue, setSearchValue] = React.useState('')
  const [openModal, setOpenModal] = React.useState(false)
  
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
  
  

  const completeTodo = (key) => {
    const todoIndex = todos.findIndex(todo => todo.text === key)

    const newTodos = [...todos]
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    saveTodos(newTodos)
  }

  const deleteTodo = (key) => {
    const todoIndex = todos.findIndex(todo => todo.text === key)

    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.push({
      text,
      completed: false
    })
    saveTodos(newTodos)
  }
  return (
    <TodoContext.Provider value={{
      error,
      loading,
      totalTodos,
      completedTodos,
      addTodo,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal, 
      setOpenModal,
      
    }}>
      {props.children}

    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }