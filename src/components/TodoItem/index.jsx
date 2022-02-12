import React from 'react';
import './TodoItem.css';
import { AiFillCheckSquare, AiFillCloseSquare } from "react-icons/ai";

function TodoItem({completed, text, onComplete, onDelete}) {

  return (
    <li className="TodoItem">
      <AiFillCheckSquare
        className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
        onClick={onComplete}
        />
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
        {text}
      </p>

      <AiFillCloseSquare className="Icon Icon-delete"
        onClick={onDelete}
      />
       
    </li>
  );
}

export { TodoItem };