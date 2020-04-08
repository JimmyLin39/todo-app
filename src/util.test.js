import { filterTodos } from './util'
import '@testing-library/react'

test('Filter Todos with empty todos and category', () => {
  expect(filterTodos([], {})).toEqual([])
})

test('Filter Todos', () => {
  expect(
    filterTodos(
      [
        {
          id: 1,
          name: 'react',
          completed: false
        },
        {
          id: 2,
          name: 'vue',
          completed: false
        },
        {
          id: 3,
          name: 'banana',
          completed: false
        }
      ],
      {
        selectedCategory: 'javascript',
        categoryList: { javascript: [1, 2], fruit: [3] }
      }
    )
  ).toEqual([
    {
      id: 1,
      name: 'react',
      completed: false,
      category: 'javascript'
    },
    {
      id: 2,
      name: 'vue',
      completed: false,
      category: 'javascript'
    }
  ])
})

test('Filter Todos with no selected category', () => {
  expect(
    filterTodos(
      [
        {
          id: 1,
          name: 'react',
          completed: false
        },
        {
          id: 2,
          name: 'vue',
          completed: false
        },
        {
          id: 3,
          name: 'banana',
          completed: false
        }
      ],
      {
        selectedCategory: null,
        categoryList: { javascript: [1, 2], fruit: [3] }
      }
    )
  ).toEqual([
    {
      id: 1,
      name: 'react',
      completed: false,
      category: 'javascript'
    },
    {
      id: 2,
      name: 'vue',
      completed: false,
      category: 'javascript'
    },
    {
      id: 3,
      name: 'banana',
      completed: false,
      category: 'fruit'
    }
  ])
})
