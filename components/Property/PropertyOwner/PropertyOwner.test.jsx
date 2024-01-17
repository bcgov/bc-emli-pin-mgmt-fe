import { render, fireEvent, waitFor } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import '@testing-library/jest-dom'

import * as stories from './PropertyOwner.stories'
jest.mock('next/config', () => () => ({ publicRuntimeConfig: '{ ... }' }));
const { PrimaryTemplate } = composeStories(stories)

describe('<PropertyOwner />', () => {
    it('should render properly without incorporation number', () => {
        const { container } = render(<PrimaryTemplate />)
        expect(container.firstChild).toBeTruthy()
    })

    it('should render properly with incorporation number', () => {
        const { container } = render(<PrimaryTemplate incorporationNumber={'12345678'}/>)
        expect(container.firstChild).toBeTruthy()
    })
})
