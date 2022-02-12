import './CreateTodoButton.css'



export function CreateTodoButton(props) {
  const onCreateButtonClicked = () => {
    alert("hello people")
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