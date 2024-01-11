import { render, screen, fireEvent } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './PropertySearch.stories'
jest.mock('next/config', () => () => ({ publicRuntimeConfig: '{ ... }' }));
const { PrimaryTemplate } = composeStories(stories)

describe('<PropertySearch />', () => {
    it('should render properly without search string', () => {
        const useRouter = jest.spyOn(require('next/router'), 'useRouter')
        useRouter.mockImplementation(() => ({
            pathname: '/',
        }))

        const { container } = render(<PrimaryTemplate />)

        expect(container.firstChild).toBeTruthy()
    })

    it('should render properly with search string', () => {
        const useRouter = jest.spyOn(require('next/router'), 'useRouter')
        useRouter.mockImplementation(() => ({
            pathname: '/',
        }))

        const { container } = render(<PrimaryTemplate />)

        fireEvent.change(screen.getByPlaceholderText('Enter a residential street address'), {target: {value: '123 main'}})

        expect(container.firstChild).toBeTruthy()
    })
})
