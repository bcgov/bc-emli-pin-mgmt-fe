import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { composeStories } from '@storybook/testing-react'
import * as stories from './Footer.stories'

const { PrimaryTemplate } = composeStories(stories)

describe('<Footer />', () => {
    it('should render properly', () => {
        const { container } = render(<PrimaryTemplate />)

        expect(container.firstChild).toBeTruthy()
    })
})


