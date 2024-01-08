import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './textbox.stories'

const { Template } = composeStories(stories)

describe('<Textbox />', () => {
    it('should render properly', () => {
        const { container } = render(<Template />)
        expect(container.firstChild).toBeTruthy()
    })
})
