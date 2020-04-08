import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/Button'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import TextField from '@material-ui/core/TextField'

import TodoItems from './TodoItems'
import {
  addTodoAction,
  removeTodoAction,
  toggleTodoAction,
  addCategoryAction
} from '../actions'
import { generateId } from '../util'

const useStyles = makeStyles(theme => ({
  form: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  }
}))

export default function Todos({ store, todos }) {
  const [error, setError] = React.useState({
    taskError: false,
    categoryError: false
  })
  let taskInput
  let categoryInput

  const validate = (name, category) => {
    if (name !== '' && category !== '') {
      return true
    }
    if (name === '') {
      setError(state => ({ ...state, taskError: true }))
    }
    if (category === '') {
      setError(state => ({ ...state, categoryError: true }))
    }
    return false
  }

  const addTask = e => {
    e.preventDefault()
    const name = taskInput.value
    const category = categoryInput.value
    // reset errors
    setError({
      taskError: false,
      categoryError: false
    })
    // validate form
    if (validate(name, category)) {
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
  }

  const removeTask = id => {
    store.dispatch(removeTodoAction(id))
  }

  const toggleTask = id => {
    store.dispatch(toggleTodoAction(id))
  }

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <TodoItems items={todos} remove={removeTask} toggle={toggleTask} />

      <form noValidate autoComplete='off' className={classes.form}>
        <IconButton
          color='primary'
          aria-label='add task'
          component='span'
          type='submit'
          onClick={addTask}
          className={classes.iconButton}
        >
          <AddCircleOutlineIcon />
        </IconButton>
        <TextField
          error={error.taskError}
          id='add-task'
          label='Add Task'
          inputRef={node => (taskInput = node)}
          className={classes.input}
          helperText={error.taskError && 'Please enter task.'}
        />
        <TextField
          error={error.categoryError}
          id='add-category'
          label='Add Category'
          inputRef={node => (categoryInput = node)}
          className={classes.input}
          helperText={error.categoryError && 'Please enter category.'}
        />
      </form>
    </div>
  )
}

Todos.propTypes = {
  store: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired
}
