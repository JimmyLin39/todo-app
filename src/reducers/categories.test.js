import categories from './categories'
import '@testing-library/react'

test('initial state', () => {
  expect(categories(undefined, {})).toEqual({
    selectedCategory: null,
    categoryList: {}
  })
})

test('add initial category', () => {
  expect(
    categories(
      { selectedCategory: null, categoryList: { python: [3] } },
      {
        type: 'ADD_CATEGORY',
        category: {
          name: 'javascript',
          taskId: 1
        }
      }
    )
  ).toEqual({
    selectedCategory: null,
    categoryList: {
      javascript: [1],
      python: [3]
    }
  })
})

test('add task id to existing category', () => {
  expect(
    categories(
      {
        selectedCategory: null,
        categoryList: { javascript: [1], python: [3] }
      },
      {
        type: 'ADD_CATEGORY',
        category: {
          name: 'javascript',
          taskId: 2
        }
      }
    )
  ).toEqual({
    selectedCategory: null,
    categoryList: {
      javascript: [1, 2],
      python: [3]
    }
  })
})

test('remove task from category', () => {
  expect(
    categories(
      {
        selectedCategory: null,
        categoryList: {
          javascript: [1, 2],
          python: [3]
        }
      },
      {
        type: 'REMOVE_CATEGORY',
        category: 'javascript',
        id: 1
      }
    )
  ).toEqual({
    selectedCategory: null,
    categoryList: {
      javascript: [2],
      python: [3]
    }
  })
})

test('set selected category', () => {
  expect(
    categories(
      {
        selectedCategory: null,
        categoryList: {
          javascript: [1, 2],
          python: [3]
        }
      },
      {
        type: 'SET_SELECTED_CATEGORY',
        selectedCategory: 'javascript'
      }
    )
  ).toEqual({
    selectedCategory: 'javascript',
    categoryList: {
      javascript: [1, 2],
      python: [3]
    }
  })
})
