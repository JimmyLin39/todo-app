const ADD_CATEGORY = 'ADD_CATEGORY'

const categories = (state = {}, action) => {
  switch (action.type) {
    case ADD_CATEGORY: {
      const { name, taskId: newTaskId } = action.category
      // new category
      if (!state[name]) {
        return { ...state, [name]: [newTaskId] }
      }
      return {
        ...state,
        [name]: [...state[name], newTaskId]
      }
    }

    default:
      return state
  }
}

export default categories
