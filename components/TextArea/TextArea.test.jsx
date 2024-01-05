import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './TextArea.stories'

const { Template } = composeStories(stories)

describe('<TextArea />', () => {
    it('should render properly', () => {
        const { container } = render(<Template />)
        expect(container.firstChild).toBeTruthy()
    })
})