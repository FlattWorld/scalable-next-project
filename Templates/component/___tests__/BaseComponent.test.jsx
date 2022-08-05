import { render } from '@testing-library/react'
import BaseComponent from '../BaseComponent'

describe('BaseComponent', () => {
  it('renders without crashing', () => {
    const { baseElement } = render(<BaseComponent />)
    expect(baseElement).toBeTruthy()
  })
})
