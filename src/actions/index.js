const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const ADD_CATEGORY = 'ADD_CATEGORY'
const SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY'

export const addTodoAction = todo => ({
  type: ADD_TODO,
  todo
})

export const removeTodoAction = id => ({
  type: REMOVE_TODO,
  id
})

export const toggleTodoAction = id => ({
  type: TOGGLE_TODO,
  id
})

export const addCategoryAction = category => ({
  type: ADD_CATEGORY,
  category
})

export const setSelectedCategoryAction = selectedCategory => ({
  type: SET_SELECTED_CATEGORY,
  selectedCategory
})
