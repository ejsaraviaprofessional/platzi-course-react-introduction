import './App.css';
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
import { todos } from './data/todos';

function App(props) {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {
          todos.map(todo => (
            <TodoItem key={todo.text} text={todo.text}/>
          ))
        }
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
