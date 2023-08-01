import { render, screen } from '@testing-library/react'
import Home from '../../pages/index'
import '@testing-library/jest-dom'
import Text from '../../text.json'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: Text.app.title,
    })

    expect(heading).toBeInTheDocument()
  })
})
