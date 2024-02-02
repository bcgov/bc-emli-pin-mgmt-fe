import { screen, render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import * as stories from './ManagePINDropdown.stories'
const { PrimaryTemplate } = composeStories(stories)
const { SuperAdminTemplate } = composeStories(stories)

jest.mock('../../../public/snowplow', () => ({
    customSnowplowCall: jest.fn(() => {}),
}));

describe('<ManagePINDropdown />', () => {
    it('should render properly', () => {
        const { container } = render(<PrimaryTemplate />)
        expect(container.firstChild).toBeTruthy()
    })

    it('should render properly with View PIN option', async () => {
        const { getByTestId, findByText } = render(<SuperAdminTemplate />)
        userEvent.click(getByTestId('dropdown-btn'))
        expect(await findByText('View access code')).toBeVisible()
    })

    it('should render properly without View PIN option', async () => {
        const { getByTestId } = render(
            <PrimaryTemplate />
        )
        userEvent.click(getByTestId('dropdown-btn'))
        const viewPINOption = screen.queryByText('View access code')
        expect(viewPINOption).not.toBeInTheDocument()
    })
})
