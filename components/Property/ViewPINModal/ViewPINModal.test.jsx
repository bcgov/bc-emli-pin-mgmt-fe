import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

import * as stories from './ViewPINModal.stories'
const { PrimaryTemplate, MultipleRowsTemplate } = composeStories(stories)

describe('<ViewPINModal />', () => {
    it('should render properly with no rows', () => {
        const { container } = render(<PrimaryTemplate />)
        expect(container.firstChild).toBeDefined()
    })
})
