import { render, fireEvent, getByText } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './GrantModal.stories'

const { PrimaryTemplate } = composeStories(stories)

describe('<GrantModal />', () => {
    it('should render properly', async () => {
        const { container } = await render(<PrimaryTemplate />)
        // console.log('grantmodal', container.firstChild)
        // console.log('hiya', document.getElementById('access-grant-modal'))

        // getByText(container, 'Grant Modal')

        expect(container.firstChild).toBeTruthy()
    })
    // it('should render properly with grant request button', () => {
    //     console.log('hiya', document.getElementById('access-grant-modal'))
    //     // fireEvent.click(document.getElementById('modalMainBtn'))
    // })
})