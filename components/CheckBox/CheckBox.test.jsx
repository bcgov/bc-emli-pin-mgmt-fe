import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './checkbox.stories'

const { Default } = composeStories(stories)

describe('<Checkbox />', () => {
    it('should render properly', () => {
        const { container } = render(<Default />)

        expect(container.firstChild).toBeTruthy()
    })
})
