import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders Todo title', () => {
  const { getByText } = render(<App />)
  const titleElement = getByText(/Todo/i)
  expect(titleElement).toBeInTheDocument()
})
