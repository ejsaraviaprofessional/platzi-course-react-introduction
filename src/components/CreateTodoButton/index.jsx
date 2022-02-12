import './CreateTodoButton.css'



export function CreateTodoButton({setOpenModal, openModal}) {
  const onCreateButtonClicked = () => {
    setOpenModal(!openModal)
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