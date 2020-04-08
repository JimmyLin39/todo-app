import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import './index.css'
import App from './App'
import rootReducer from './reducers'

const logger = store => next => action => {
  console.group(action.type)
  console.log('The action: ', action)
  const result = next(action)
  console.log('The new state:', store.getState())
  console.groupEnd()
  return result
}

const store =
  process.env.NODE_ENV === 'development'
    ? createStore(rootReducer, applyMiddleware(logger))
    : createStore(rootReducer)

ReactDOM.render(<App store={store} />, document.getElementById('root'))
