import React from 'react'
import PropTypes from 'prop-types'

export default function List({ remove, items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => remove(item)}>X</button>
        </li>
      ))}
    </ul>
  )
}

List.propTypes = {
  remove: PropTypes.func.isRequired,
  items: PropTypes.object.isRequired
}
