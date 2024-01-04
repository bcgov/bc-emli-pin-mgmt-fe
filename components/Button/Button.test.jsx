import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './Button.stories'

const { Primary } = composeStories(stories)

describe('<Button />', () => {
    it('should render properly', () => {
        const { container } = render(<Primary />)

        expect(container.firstChild).toBeTruthy()
    })
})
