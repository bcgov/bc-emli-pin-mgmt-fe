import * as stories from './NavLink.stories'
import { composeStories } from '@storybook/testing-react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const { PrimaryTemplate } = composeStories(stories)

describe('<NavLink />', () => {
    it('should render properly', () => {
        const { container } = render(<PrimaryTemplate />)

        expect(container.firstChild).toBeDefined()
    })
})