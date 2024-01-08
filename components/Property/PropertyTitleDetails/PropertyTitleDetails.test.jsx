import { render, fireEvent, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import '@testing-library/jest-dom'

import * as stories from './PropertyTitleDetails.stories'
const { PrimaryTemplate } = composeStories(stories)

describe('<PropertyTitleDetails />', () => {
    it('should render properly with property details collapsed', () => {
        const { container } = render(<PrimaryTemplate />)

        expect(container.firstChild).toBeTruthy()
    })

    it('should render properly with property details expanded', () => {
        const { container } = render(<PrimaryTemplate />)
        fireEvent.click(screen.getByTestId('property-details-button'))

        expect(container.firstChild).toBeTruthy()
    })
})
