import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import './styles.css'

import * as stories from './Alert.stories'

const { Template } = composeStories(stories)

describe('<Alert />', () => {
    it('should render properly', () => {
        const { container } = render(<Template />)

        expect(container.firstChild).toBeTruthy()
    })
})
