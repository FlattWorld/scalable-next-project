import TermsAndConditions from '../index'
import { render, screen } from '@testing-library/react'

describe('TermsAndConditions', () => {
  it('renders without crashing', () => {
    const { baseElement } = render(<TermsAndConditions />)
    screen.debug()
    expect(baseElement).toBeTruthy()
  })
})
