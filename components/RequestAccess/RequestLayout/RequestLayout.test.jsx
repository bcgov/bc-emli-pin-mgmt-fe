import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './RequestLayout.stories'
jest.mock('next/config', () => () => ({ publicRuntimeConfig: '{ ... }' }));
const { PrimaryTemplate } = composeStories(stories)

describe('<RequestLayout />', () => {
    it('should render properly', () => {
        const { container } = render(<PrimaryTemplate />)
        expect(container.firstChild).toBeTruthy()
    })
})
