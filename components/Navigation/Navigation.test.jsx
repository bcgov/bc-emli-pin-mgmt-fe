import { render } from '@testing-library/react'
import * as stories from './Navigation.stories'
import { composeStories } from '@storybook/testing-react'

const { PrimaryTemplate } = composeStories(stories)

describe('<Navigation />', () => {
    it('should render properly', () => {
        const { container } = render(<PrimaryTemplate />)

        expect(container.firstChild).toBeTruthy()
    })
})
