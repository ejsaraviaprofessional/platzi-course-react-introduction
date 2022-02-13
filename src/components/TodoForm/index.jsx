
import React from 'react'
import { TodoContext } from '../../providers/TodoContext'
import './TodoForm.css'

function TodoForm() {
  const [newTodo, setNewTodo] = React.useState('')
  const {addTodo, setOpenModal} = React.useContext(TodoContext)

  const onChangeNewTodo = (event) => {
    setNewTodo(event.target.value)
  }
  const onCancel = () => {
    setOpenModal(false)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodo)
    setOpenModal(false)
  }
  return (
    <form onSubmit={onSubmit}>
      <label>New Todo</label>
      <textarea 
        onChange={onChangeNewTodo}
        value={newTodo}
        placeholder="my new todo" >

      </textarea>
      <div className="TodoForm-buttonContainer">
        <button 
          className="TodoForm-button TodoForm-button-cancel"
          type="button"
          onClick={onCancel}
        >Cancel</button>
        <button
          className="TodoForm-button TodoForm-button-add"
          type="submit"
        >Create</button>
        </div>
    </form>
  )
}
export {TodoForm}