import React from 'react'
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoCounter } from "../components/TodoCounter";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";
import { TodoSearch } from "../components/TodoSearch";

import { TodoContext } from "../providers/TodoContext";


export function AppUI() {
  
  return (
    <>
    <TodoCounter />
      <TodoSearch />
        <TodoContext.Consumer>
          {({
            error, 
            loading, 
            searchedTodos, 
            completeTodo, 
            deleteTodo
          }) => (
            <TodoList>
              {error && <p>Wait, there is an error</p>}
              {loading && <p>We are Locading...</p>}
              {!loading && !searchedTodos.length && <p>Create your first todo!!!</p>}
      
              {
                searchedTodos.map(todo => (
                  <TodoItem 
                    key={todo.text} 
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                  />
                ))
              }
            </TodoList>
          )}
        </TodoContext.Consumer>
      <CreateTodoButton />
    </>
  )
}
