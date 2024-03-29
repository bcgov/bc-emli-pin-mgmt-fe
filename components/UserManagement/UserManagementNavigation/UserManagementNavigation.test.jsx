import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './UserManagementNavigation.stories'

const { PrimaryTemplate } = composeStories(stories)

describe('<UserManagementNavigation />', () => {
    it('should render properly', () => {
        const { container } = render(<PrimaryTemplate />)

        expect(container.firstChild).toBeTruthy()
    })
})