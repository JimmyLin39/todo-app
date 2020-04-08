import React from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/Button'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import TodoItems from './TodoItems'
import {
  addTodoAction,
  removeTodoAction,
  toggleTodoAction,
  addCategoryAction
} from '../actions'
import { generateId } from '../util'

export default function Todos({ store, todos }) {
  let taskInput
  let categoryInput

  const addTask = e => {
    e.preventDefault()
    const name = taskInput.value
    const category = categoryInput.value
    taskInput.value = ''
    categoryInput.value = ''

    const id = generateId()

    store.dispatch(
      addTodoAction({
        id,
        name,
        complete: false
      })
    )
    store.dispatch(
      addCategoryAction({
        name: category,
        taskId: id
      })
    )
  }

  const removeTask = id => {
    store.dispatch(removeTodoAction(id))
  }

  const toggleTask = id => {
    store.dispatch(toggleTodoAction(id))
  }

  return (
    <>
      <h1>Todo List</h1>
      <TodoItems items={todos} remove={removeTask} toggle={toggleTask} />
      <IconButton
        color='primary'
        aria-label='add task'
        component='span'
        onClick={addTask}
      >
        <AddCircleOutlineIcon />
      </IconButton>
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

Todos.propTypes = {
  store: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired
}
