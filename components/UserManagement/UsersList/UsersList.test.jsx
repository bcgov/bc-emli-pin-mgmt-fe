import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './UsersList.stories'

const { PrimaryTemplate } = composeStories(stories)

describe('<UsersList />', () => {
    it('should render properly', () => {
        const { container } = render(<PrimaryTemplate />)

        expect(container.firstChild).toBeTruthy()
    })
})