import categories from './categories'
import '@testing-library/react'

test('initial state', () => {
  expect(categories(undefined, [])).toEqual({})
})

test('add initial category', () => {
  expect(
    categories(
      { python: [3] },
      {
        type: 'ADD_CATEGORY',
        category: {
          name: 'javascript',
          taskId: 1
        }
      }
    )
  ).toEqual({
    javascript: [1],
    python: [3]
  })
})

test('add task id to existing category', () => {
  expect(
    categories(
      { javascript: [1], python: [3] },
      {
        type: 'ADD_CATEGORY',
        category: {
          name: 'javascript',
          taskId: 2
        }
      }
    )
  ).toEqual({
    javascript: [1, 2],
    python: [3]
  })
})
