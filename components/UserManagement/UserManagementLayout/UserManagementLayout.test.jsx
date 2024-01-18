import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './UserManagementLayout.stories'

const { PrimaryTemplate } = composeStories(stories)

jest.mock('next/config', () => () => ({ publicRuntimeConfig: '{ ... }' }));

describe('<UserManagementLayout />', () => {
    it('should render properly', () => {
        const { container } = render(<PrimaryTemplate />)

        expect(container.firstChild).toBeTruthy()
    })
})