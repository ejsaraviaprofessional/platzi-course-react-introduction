import React from 'react'
import './TodoCounter.css'
import { TodoContext } from "../../providers/TodoContext";

export function TodoCounter() {
  const {completedTodos, totalTodos} = React.useContext(TodoContext)

  return (
    <h2 className="TodoCounter">
      You are completedTodos {completedTodos} of {totalTodos} todos
    </h2>
  )
}
