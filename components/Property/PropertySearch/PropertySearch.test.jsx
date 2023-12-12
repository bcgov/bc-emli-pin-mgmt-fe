import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './PropertySearch.stories'
const { PrimaryTemplate } = composeStories(stories)

describe('<PropertySearch />', () => {
    it('should render properly', () => {
        const useRouter = jest.spyOn(require('next/router'), 'useRouter')
        useRouter.mockImplementation(() => ({
            pathname: '/',
        }))

        const { container } = render(<PrimaryTemplate />)

        expect(container.firstChild).toBeTruthy()
    })
})
