import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './ManagePINDropdown.stories'
const { PrimaryTemplate } = composeStories(stories)

describe('<ManagePINDropdown />', () => {
    it('should render properly', () => {
        const { container } = render(<PrimaryTemplate />)
        console.log(container)
        expect(container.firstChild).toBeTruthy()
    })
})
