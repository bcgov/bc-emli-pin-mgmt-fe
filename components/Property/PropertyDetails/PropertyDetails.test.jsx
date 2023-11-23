import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './PropertyDetails.stories'
const { PrimaryTemplate } = composeStories(stories)

describe('<PropertyDetails />', () => {
    it('should render properly', () => {
        function testFunction() {
            return true
        }

        const { container } = render(<PrimaryTemplate reloaded={testFunction}/>)

        expect(container.firstChild).toBeTruthy()
    })
})
