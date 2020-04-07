import todos from './todos'
import '@testing-library/react'

test('initial state', () => {
  expect(todos(undefined, [])).toEqual([])
})

test('ADD_TODO', () => {
  expect(
    todos([], {
      type: 'ADD_TODO',
      todo: {
        id: 0,
        complete: false,
        name: 'Learn React'
      }
    })
  ).toEqual([
    {
      complete: false,
      id: 0,
      name: 'Learn React'
    }
  ])
  expect(
    todos(
      [
        {
          complete: false,
          id: 0,
          name: 'Learn React'
        }
      ],
      {
        type: 'ADD_TODO',
        todo: {
          id: 1,
          complete: false,
          name: 'Learn Vue'
        }
      }
    )
  ).toEqual([
    {
      complete: false,
      id: 0,
      name: 'Learn React'
    },
    {
      complete: false,
      id: 1,
      name: 'Learn Vue'
    }
  ])
})
