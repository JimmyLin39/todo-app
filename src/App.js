import React from 'react'
import Todos from './components/Todos'
import Categories from './components/Categories'
import PropTypes from 'prop-types'

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props
    store.subscribe(() => this.forceUpdate())
  }
  render() {
    const { store } = this.props
    const { todos } = store.getState()
    return (
      <div className='App'>
        <Categories />
        <Todos store={store} todos={todos} />
      </div>
    )
  }
}

export default App

App.propTypes = {
  store: PropTypes.object.isRequired
}
