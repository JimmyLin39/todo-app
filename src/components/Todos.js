import React from 'react'
import List from './List'
import { addTodoAction, removeTodoAction, toggleTodoAction } from '../actions'
import { generateId } from '../util'

export default function Todos({ store, todos }) {
  let taskInput
  let categoryInput

  const addTask = e => {
    e.preventDefault()
    const name = taskInput.value
    taskInput.value = ''

    store.dispatch(
      addTodoAction({
        id: generateId(),
        name,
        complete: false
      })
    )
  }
  return (
    <>
      <h1>Todo List</h1>
      <List items={todos} />
      <button onClick={addTask}>+</button>
      <input
        type='text'
        placeholder='Add Task'
        ref={node => (taskInput = node)}
      />
      <input
        type='text'
        placeholder='Add Category'
        ref={node => (categoryInput = node)}
      />
    </>
  )
}
