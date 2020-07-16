import React from 'react'
import { render } from '@testing-library/react'
import RadioGroup from '../RadioGroup'
import '@testing-library/jest-dom/extend-expect'

    
const props  = {
        id: 2,
        name: 'platform',
        type: 'radio',
        options: ['Web', 'Android', 'IOS']
    }

describe('Radio group component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<RadioGroup {...props} />)
    const radiosWrapper = getByTestId(RadioGroup.testId)
    expect(radiosWrapper).toBeInTheDocument()
  })

  it('render correct number of radios', () => {
    const { getByTestId } = render(<RadioGroup {...props} />)
    const inputContainer = getByTestId(RadioGroup.testId)
    const radios = inputContainer.querySelectorAll('input[type="radio"]')
    expect(radios.length).toBe(props.options.length)
  })
})
