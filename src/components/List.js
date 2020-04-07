import React from 'react'
import PropTypes from 'prop-types'

export default function List({ items, remove }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => remove(item.id)}>X</button>
        </li>
      ))}
    </ul>
  )
}

List.propTypes = {
  items: PropTypes.object.isRequired,
  remove: PropTypes.func.isRequired
}
