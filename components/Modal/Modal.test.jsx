import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import '@testing-library/jest-dom'

import * as stories from './Modal.stories'

const { BasicTemplate } = composeStories(stories)

describe('<Modal />', () => {
    it('should render properly', () => {
        const { getByText } = render(<BasicTemplate />)
        expect(getByText('Modal Text')).toBeVisible()
        expect(getByText('Basic Modal')).toBeVisible()
    })
})
