import { render, screen } from '@testing-library/react'
import Home from './page'
import { expect, test } from 'vitest'

test('renders Form component', () => {
  render(<Home />)
  const formElement = screen.getByTestId('form')
  expect(formElement)
})
