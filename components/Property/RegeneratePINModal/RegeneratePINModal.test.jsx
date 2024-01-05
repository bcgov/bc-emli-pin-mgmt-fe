import { render, fireEvent, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

import * as stories from './RegeneratePINModal.stories'
const { PrimaryTemplate } = composeStories(stories)

describe('<RegeneratePINModal />', () => {
    it('should render properly with valid email and phone', () => {
        const { container } = render(<PrimaryTemplate />)
        fireEvent.change(screen.getByTestId('phone'), {target: { value: "1231231234"}})
        fireEvent.change(screen.getByTestId('email'), {target: { value: "test@test.ca"}})

        fireEvent.click(screen.getByTestId('modalMainBtn'))

        expect(container.firstChild).toBeTruthy()
    })

    it('should render properly with invalid email and phone', () => {
        const { container } = render(<PrimaryTemplate />)
        fireEvent.change(screen.getByTestId('phone'), {target: { value: "123"}})
        fireEvent.change(screen.getByTestId('email'), {target: { value: "test"}})

        expect(container.firstChild).toBeTruthy()
    })
})
