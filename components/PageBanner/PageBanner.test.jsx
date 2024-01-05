import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './PageBanner.stories'

const { PrimaryTemplate } = composeStories(stories)

describe('<PageBanner />', () => {
    it('should render properly', () => {
        const { container } = render(<PrimaryTemplate />)
        expect(container.firstChild).toBeTruthy()
    })
})
