import React, { memo } from 'react'

const HabitAddForm = memo(({ onAdd }) => {
  const formRef = React.createRef()
  const inputRef = React.createRef()

  const onSubmit = (e) => {
    e.preventDefault()
    const name = inputRef.current.value
    name && onAdd(name)
    formRef.current.reset()
  }

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  )
})

export default HabitAddForm
