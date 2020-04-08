import React from 'react'
import PropTypes from 'prop-types'

export default function List({ items, remove, toggle }) {
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

List.propTypes = {
  items: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired
}
