export const generateId = () => {
  return (
    Math.random()
      .toString(36)
      .substring(2) + new Date().getTime().toString(36)
  )
}

export const addCategoryToTodos = (todos, categories) => {
  if (categories !== {} && todos.length) {
    return todos.map(todo => {
      for (const key in categories) {
        if (categories[key].includes(todo.id)) {
          return { ...todo, category: key }
        }
      }
      return { ...todo }
    })
  }
  return [...todos]
}
