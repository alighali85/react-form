import React from 'react'
import { render } from '@testing-library/react'
import MultiSelect from '../MultiSelect'
import '@testing-library/jest-dom/extend-expect'

    
const props  = {
        id: 1,
        title: 'select a game',
        name: 'game',
        type: 'checkbox',
        items: [
            {name: 'June’s Journey', image: ''},
            {name: 'Pearl’s Peril', image: ''},
            {name: 'Tropicats', image: ''},
            {name: 'Diamond Dash', image: ''},
            {name: 'Bubble Island 2', image: ''},
            {name: 'Jelly Splash', image: ''},
        ]
    }

describe('Multi select component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<MultiSelect {...props} />)
    const cardsWrapper = getByTestId(MultiSelect.testId)
    expect(cardsWrapper).toBeInTheDocument()
  })

  it('render correct number cards', () => {
    const { getByTestId } = render(<MultiSelect {...props} />)
    const cardsWrapper = getByTestId(MultiSelect.testId)
    const cards = cardsWrapper.querySelectorAll('input[type="checkbox"]')
    expect(cards.length).toBe(props.items.length)
  })
})
