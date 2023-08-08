import { render } from '@testing-library/react'
import * as stories from './Header.stories'
import { composeStories } from '@storybook/testing-react'

const { PrimaryTemplate } = composeStories(stories)

describe('<Header />', () => {
    it('should render properly', () => {
        const { container } = render(<PrimaryTemplate />)

        expect(container.firstChild).toBeTruthy()
    })
})
