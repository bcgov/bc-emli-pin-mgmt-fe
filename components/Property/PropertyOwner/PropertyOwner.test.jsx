import { render, fireEvent, waitFor } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import '@testing-library/jest-dom'

import * as stories from './PropertyOwner.stories'
const { PrimaryTemplate } = composeStories(stories)

describe('<PropertyOwner />', () => {
    it('should render properly', () => {
        const { container } = render(<PrimaryTemplate />)
        expect(container.firstChild).toBeTruthy()
    })

    it('Modal to Open', async () => {
        const { getByText } = render(<PrimaryTemplate />)
        expect(getByText('View PIN History')).toBeVisible()
        fireEvent.click(getByText('View PIN History'))

        await waitFor(() => getByText('Viewing PIN history failed'))
        expect(getByText('Viewing PIN history failed')).toBeVisible()
    })
})
