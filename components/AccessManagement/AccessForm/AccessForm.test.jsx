import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './AccessForm.stories'

const { PrimaryTemplate } = composeStories(stories)

jest.mock('next/config', () => () => ({ publicRuntimeConfig: '{ ... }' }));

describe('<AccessForm />', () => {
    it('should render properly', () => {
        const { container } = render(<PrimaryTemplate />)

        expect(container.firstChild).toBeTruthy()
    })
})