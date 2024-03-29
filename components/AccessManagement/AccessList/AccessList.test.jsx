import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './AccessList.stories'

const { PrimaryTemplate } = composeStories(stories)

describe('<AccessList />', () => {
    it('should render properly', () => {
        const { container } = render(<PrimaryTemplate />)

        expect(container.firstChild).toBeTruthy()
    })
})