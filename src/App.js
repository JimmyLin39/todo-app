import React from 'react'
import Todos from './components/Todos'
import Category from './components/Category'
import PropTypes from 'prop-types'
import { addCategoryToTodos } from './util'

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props
    store.subscribe(() => this.forceUpdate())
  }
  render() {
    const { store } = this.props
    const { todos, categories } = store.getState()
    const todosWithCategory = addCategoryToTodos(todos, categories.categoryList)
    return (
      <div className='App'>
        <Category categories={categories} />
        <Todos store={store} todos={todosWithCategory} />
      </div>
    )
  }
}

export default App

App.propTypes = {
  store: PropTypes.object.isRequired
}
