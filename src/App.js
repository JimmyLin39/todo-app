import React from 'react'
import Todos from './components/Todos'
import Categories from './components/Categories'
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
    const todosWithCategory = addCategoryToTodos(todos, categories)
    const categoriesArr = Object.keys(categories)
    return (
      <div className='App'>
        <Categories categoriesArr={categoriesArr} />
        <Todos store={store} todos={todosWithCategory} />
      </div>
    )
  }
}

export default App

App.propTypes = {
  store: PropTypes.object.isRequired
}
