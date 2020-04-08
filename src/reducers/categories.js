const ADD_CATEGORY = 'ADD_CATEGORY'

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
      if (!state[name]) {
        return {
          ...state,
          categoryList: { ...state.categoryList, [name]: [newTaskId] }
        }
      }
      return {
        ...state,
        categoryList: {
          ...state.categoryList,
          [name]: [...state[name], newTaskId]
        }
      }
    }

    default:
      return state
  }
}

export default categories
