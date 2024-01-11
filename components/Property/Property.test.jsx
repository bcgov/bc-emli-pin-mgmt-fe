import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './Property.stories'
jest.mock('next/config', () => () => ({ publicRuntimeConfig: '{ ... }' }));
const { PrimaryTemplate } = composeStories(stories)

describe('<Property />', () => {
    it('should render properly', () => {
        const useRouter = jest.spyOn(require('next/router'), 'useRouter')
        useRouter.mockImplementation(() => ({
            pathname: '/',
        }))
        
        const { container } = render(<PrimaryTemplate />)
        expect(container.firstChild).toBeTruthy()
    })
})