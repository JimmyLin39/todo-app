import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

export default function TodoItems({ items, remove, toggle }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <span
            onClick={() => toggle(item.id)}
            style={{
              textDecoration: item.complete ? 'line-through' : 'none'
            }}
          >
            {item.name}
          </span>{' '}
          | {item.category && <span>{item.category}</span>}
          <button onClick={() => remove(item.id)}>X</button>
        </li>
      ))}
    </ul>
  )
}

TodoItems.propTypes = {
  items: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired
}
