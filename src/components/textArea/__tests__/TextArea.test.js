import React from 'react'
import { render } from '@testing-library/react'
import TextArea from '../textArea'
import '@testing-library/jest-dom/extend-expect'

describe('Text area component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<TextArea />)
    const inputComponent = getByTestId(TextArea.testId)
    expect(inputComponent).toBeInTheDocument()
  })

  it('render text area with correct props', () => {
    const props  = {
        id: 1,
        name: 'issue-text', 
        placeholder: 'Enter description',
        type: 'textarea',
    }

    const { getByTestId } = render(<TextArea {...props} />)
    const inputContainer = getByTestId(TextArea.testId)
    const inputField = inputContainer.querySelector('textarea')
    expect(Number(inputField.id)).toBe(props.id)
    expect(inputField.getAttribute('name')).toBe(props.name)
    expect(inputField.type).toBe(props.type)
  })
})
