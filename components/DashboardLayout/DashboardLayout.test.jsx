import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './DashboardLayout.stories'

const { PrimaryTemplate } = composeStories(stories)

describe('<DashboardLayout />', () => {
    it('should render properly', () => {
        const { container } = render(<PrimaryTemplate />)

        expect(container.firstChild).toBeTruthy()
    })
})
