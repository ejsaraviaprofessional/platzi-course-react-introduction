import React from 'react'
import './TodoCounter.css'

export function TodoCounter({total, completed}) {
  return (
    <h2 className="TodoCounter">
      You are completed {completed} of {total} todos
    </h2>
  )
}
