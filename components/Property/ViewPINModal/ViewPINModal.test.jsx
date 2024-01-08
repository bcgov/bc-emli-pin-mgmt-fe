import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

import * as stories from './ViewPINModal.stories'
const { PrimaryTemplate } = composeStories(stories)

describe('<ViewPINModal />', () => {
    it('should render properly without PIN', () => {
        const { container } = render(<PrimaryTemplate />)
        expect(container.firstChild).toBeDefined()
    })

    it('should render properly with PIN', () => {
        const { container } = render(<PrimaryTemplate livePIN={'12345678'} />)
        expect(container.firstChild).toBeDefined()
    })
})
