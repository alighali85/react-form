import React from 'react'
import { render } from '@testing-library/react'
import TextInput from '../TextInput'
import '@testing-library/jest-dom/extend-expect'

describe('Input text', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<TextInput />)
    const inputComponent = getByTestId(TextInput.testId)
    expect(inputComponent).toBeInTheDocument()
  })

  it('render input with correct props', () => {
    const props  = {
      id: 1,
      name: 'title',
      type: 'text',
    }

    const { getByTestId } = render(<TextInput {...props} />)
    const inputContainer = getByTestId(TextInput.testId)
    const inputField = inputContainer.querySelector('input')
    expect(Number(inputField.id)).toBe(props.id)
    expect(inputField.getAttribute('name')).toBe(props.name)
    expect(inputField.type).toBe(props.type)
  })
})
