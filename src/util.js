export const generateId = () => {
  return (
    Math.random()
      .toString(36)
      .substring(2) + new Date().getTime().toString(36)
  )
}

export const filterTodos = (todos, categories) => {
  if (categories.categoryList !== {} && todos.length) {
    const { selectedCategory, categoryList } = categories
    // has selected category
    if (selectedCategory) {
      const filteredTodos = todos.filter(todo =>
        categoryList[selectedCategory].includes(todo.id)
      )
      const todosWithCategory = filteredTodos.map(todos => ({
        ...todos,
        category: selectedCategory
      }))
      return todosWithCategory
    } else {
      return todos.map(todo => {
        for (const key in categoryList) {
          if (categoryList[key].includes(todo.id)) {
            return { ...todo, category: key }
          }
        }
        return { ...todo }
      })
    }
  }
  return [...todos]
}
