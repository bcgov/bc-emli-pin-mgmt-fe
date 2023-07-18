import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { axe, toHaveNoViolations } from 'jest-axe'
import Temp from '../../components/Temp'

expect.extend(toHaveNoViolations)

describe('Example Text Case', () => {
  it('Example Test', async () => {
    const { container } = render(<Temp />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
