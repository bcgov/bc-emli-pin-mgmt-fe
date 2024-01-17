import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './EditModal.stories'

const { PrimaryTemplate } = composeStories(stories)

jest.mock('next/config', () => () => ({ publicRuntimeConfig: '{ ... }' }));
const axios = require('axios')
jest.mock('axios')

describe('<EditModal />', () => {
    afterEach(() => {
        jest.restoreAllMocks()
    })
    it('should render properly', () => {
        axios.put.mockResolvedValue({
            data: "",
        })
        const { container } = render(<PrimaryTemplate />)

        expect(container.firstChild).toBeTruthy()
    })
})