import './CreateTodoButton.css'



export function CreateTodoButton({setOpenModal}) {
  const onCreateButtonClicked = () => {
    setOpenModal(prevState => !prevState)
  }

  return (
      <button 
        className='CreateTodoButton'
        onClick={onCreateButtonClicked}
        >
          +
      </button>
    
  )
}