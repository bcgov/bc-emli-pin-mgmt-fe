import { render, fireEvent, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './RequestForm.stories'

const { PrimaryTemplate } = composeStories(stories)
jest.mock('next/config', () => () => ({ publicRuntimeConfig: '{ ... }' }));
describe('<RequestForm />', () => {
    it('should render properly', () => {
        const { container } = render(<PrimaryTemplate />)

        fireEvent.change(screen.getByPlaceholderText(`Why you need access, e.g., 'Do customer support' (Maximus Canada agents) or 'Manage access requests' (Maximus Canada supervisors, Service BC staff)`), {target: {value: 'test'}})
        fireEvent.change(screen.getByPlaceholderText('Maximus Canada, Service BC, EMLI'), {target: {value: 'test'}})
        fireEvent.click(screen.getByText('Supervisor'))
        fireEvent.click(screen.getByText('Submit'))

        expect(container.firstChild).toBeTruthy()
    })
})
