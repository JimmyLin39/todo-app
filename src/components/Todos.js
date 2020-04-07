import React from 'react'
import List from './List'

export default function Todos(props) {
  return (
    <>
      <h1>Todo List</h1>
      <List />
      <button>+</button>
      <input type='text' placeholder='Add Task' />
      <input type='text' placeholder='Add Category' />
    </>
  )
}
