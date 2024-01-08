import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './PropertyLayout.stories'
const { PrimaryTemplate } = composeStories(stories)

describe('<PropertyLayout />', () => {
    beforeEach(() => {
        window.sessionStorage.clear();
    });
    it('should render properly with searchString', () => {
        const useRouter = jest.spyOn(require('next/router'), 'useRouter')
        useRouter.mockImplementation(() => ({
            pathname: '/',
        }))

        sessionStorage.setItem('searchString', 'Test')
        
        const { container } = render(<PrimaryTemplate />)
        expect(container.firstChild).toBeTruthy()
    })

    it('should render properly with autocompleteSearchString', () => {
        const useRouter = jest.spyOn(require('next/router'), 'useRouter')
        useRouter.mockImplementation(() => ({
            pathname: '/',
        }))

        sessionStorage.setItem('autocompleteSearchString', 'Test')
        
        const { container } = render(<PrimaryTemplate />)
        expect(container.firstChild).toBeTruthy()
    })
})
