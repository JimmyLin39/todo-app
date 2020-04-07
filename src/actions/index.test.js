import { addTodoAction, removeTodoAction, toggleTodoAction } from './index'
import '@testing-library/react'

test('Add Todo Action', () => {
  expect(
    addTodoAction({
      id: 0,
      complete: false,
      name: 'Learn React'
    })
  ).toEqual({
    type: 'ADD_TODO',
    todo: {
      complete: false,
      id: 0,
      name: 'Learn React'
    }
  })
})

test('Remove Todo Action', () => {
  expect(removeTodoAction(0)).toEqual({
    type: 'REMOVE_TODO',
    id: 0
  })
})

test('Toggle Todo Action', () => {
  expect(toggleTodoAction(0)).toEqual({
    type: 'TOGGLE_TODO',
    id: 0
  })
})
