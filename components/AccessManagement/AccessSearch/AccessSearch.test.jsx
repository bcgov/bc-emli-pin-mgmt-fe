import { render, fireEvent } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './AccessSearch.stories'

const { PrimaryTemplate } = composeStories(stories)

describe('<AccessSearch />', () => {
    it('should render properly', () => {
        const { container } = render(<PrimaryTemplate />)

        expect(container.firstChild).toBeTruthy()
    })
    it('should render properly with search input', () => {
        const { container } = render(<PrimaryTemplate />)

        fireEvent.change(document.getElementById('searchInput'), {target: {value: 'test input'}})
        fireEvent.click(document.getElementById('searchButton'))
        expect(container.firstChild).toBeTruthy()
    })
})