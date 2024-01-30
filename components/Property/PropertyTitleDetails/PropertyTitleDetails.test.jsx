import { render, fireEvent, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import '@testing-library/jest-dom'

import * as stories from './PropertyTitleDetails.stories'
jest.mock('next/config', () => () => ({ publicRuntimeConfig: '{ ... }' }));
const { PrimaryTemplate } = composeStories(stories)

jest.mock('../../../public/snowplow', () => ({
    customSnowplowCall: jest.fn(() => {}),
}));

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
