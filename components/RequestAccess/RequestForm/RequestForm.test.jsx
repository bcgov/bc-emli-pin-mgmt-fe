import { render, fireEvent, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './RequestForm.stories'

const { PrimaryTemplate } = composeStories(stories)
jest.mock('next/config', () => () => ({ publicRuntimeConfig: '{ ... }' }));
describe('<RequestForm />', () => {
    it('should render properly', () => {
        const { container } = render(<PrimaryTemplate />)

        fireEvent.change(screen.getByPlaceholderText('Describe the reason for wanting access to this application'), {target: {value: 'test'}})
        fireEvent.change(screen.getByPlaceholderText('Enter your organization name'), {target: {value: 'test'}})
        fireEvent.click(screen.getByText('Administrator'))
        fireEvent.click(screen.getByText('Submit'))

        expect(container.firstChild).toBeTruthy()
    })
})
