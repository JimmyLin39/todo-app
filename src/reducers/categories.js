const ADD_CATEGORY = 'ADD_CATEGORY'
const REMOVE_CATEGORY = 'REMOVE_CATEGORY'
const SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY'

const categories = (
  state = {
    selectedCategory: null,
    categoryList: {}
  },
  action
) => {
  switch (action.type) {
    case ADD_CATEGORY: {
      const { name, taskId: newTaskId } = action.category
      // new category
      if (!state.categoryList[name]) {
        return {
          ...state,
          categoryList: { ...state.categoryList, [name]: [newTaskId] }
        }
      }
      return {
        ...state,
        categoryList: {
          ...state.categoryList,
          [name]: state.categoryList[name].concat(newTaskId)
        }
      }
    }
    case REMOVE_CATEGORY: {
      const { categoryList } = state
      const { category } = action
      return {
        ...state,
        categoryList: {
          ...categoryList,
          [category]: categoryList[category].filter(
            taskId => taskId !== action.id
          )
        }
      }
    }

    case SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.selectedCategory
      }
    default:
      return state
  }
}

export default categories
