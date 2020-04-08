import React from 'react'
import Todos from './components/Todos'
import Category from './components/Category'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import { filterTodos } from './util'
import './App.css'

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props
    store.subscribe(() => this.forceUpdate())
  }
  render() {
    const { store } = this.props
    const { todos, categories } = store.getState()
    const filteredTodos = filterTodos(todos, categories)
    return (
      <div className='App'>
        <header className='app-header'>
          <Typography variant='h2' component='h2' color='primary'>
            Todo List
          </Typography>
          <Category store={store} categories={categories} />
        </header>
        <Todos store={store} todos={filteredTodos} />
      </div>
    )
  }
}

export default App

App.propTypes = {
  store: PropTypes.object.isRequired
}
