import { render, fireEvent, waitFor } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import '@testing-library/jest-dom'

import * as stories from './PropertyTitleDetails.stories'
const { PrimaryTemplate } = composeStories(stories)

describe('<PropertyTitleDetails />', () => {
    it('should render properly', () => {
        const { container } = render(<PrimaryTemplate />)

        expect(container.firstChild).toBeTruthy()
    })
})
