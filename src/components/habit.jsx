import React, { memo, useEffect } from 'react'

const Habit = memo(({ habit, name, count }) => {
  const handleIncrement = () => {
    onIncrement(habit)
  }

  const handleDecrement = () => {
    onDecrement(habit)
  }

  const handleDelete = () => {
    onDelete(habit)
  }

  return (
    <li className="habit">
      <span className="habit-name">{name}</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fa-solid fa-square-plus"></i>
      </button>
      <button className="habit-button habit-decrease" onClick={handleDecrement}>
        <i className="fa-solid fa-square-minus"></i>
      </button>
      <button className="habit-button habit-delete" onClick={handleDelete}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </li>
  )
})

export default Habit
