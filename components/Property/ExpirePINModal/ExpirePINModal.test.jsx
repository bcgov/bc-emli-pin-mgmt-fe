import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

import * as stories from './ExpirePINModal.stories'
const { PrimaryTemplate, MultipleRowsTemplate } = composeStories(stories)

describe('<ExpirePINModal />', () => {
    it('should render properly', () => {
        const { container } = render(<PrimaryTemplate />)
        expect(container.firstChild).toBeDefined()
    })
})
