import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './Header.stories'

jest.mock('next/config', () => () => ({ publicRuntimeConfig: '{ ... }' }));
const { PrimaryTemplate } = composeStories(stories)

describe('<Header />', () => {
    it('should render properly', () => {
        const { container } = render(<PrimaryTemplate />)

        expect(container.firstChild).toBeTruthy()
    })
})
