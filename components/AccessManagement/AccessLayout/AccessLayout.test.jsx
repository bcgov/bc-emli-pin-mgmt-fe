import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './AccessLayout.stories'

const { PrimaryTemplate } = composeStories(stories)

jest.mock('next/config', () => () => ({ publicRuntimeConfig: '{ ... }' }));

describe('<AccessLayout />', () => {
    it('should render properly', () => {
        const { container } = render(<PrimaryTemplate />)

        expect(container.firstChild).toBeTruthy()
    })
})