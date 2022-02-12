import './App.css';

import React from 'react'
import { AppUI } from './AppUI';
import { TodoProvider } from '../providers/TodoContext'

function App({ }) {
  

  return (
    <TodoProvider >
      <AppUI />
    </TodoProvider>
    
  );
}

export default App;
