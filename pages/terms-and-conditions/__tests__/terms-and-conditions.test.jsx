import { render } from '@testing-library/react'
import TermsAndConditions from '../TermsAndConditions'

describe('TermsAndConditions', () => {
  it('renders without crashing', () => {
    const { baseElement } = render(<TermsAndConditions />)
    expect(baseElement).toBeTruthy()
  })
})
