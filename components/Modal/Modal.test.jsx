import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import userEvent from '@testing-library/user-event'

import * as stories from './Modal.stories'

const { BasicTemplate } = composeStories(stories)

describe('<Modal />', () => {
    it('should render properly', () => {
        // const { getByText, getByTestId } = render(<BasicTemplate />)
        // const modalShowButton = getByText('Click Me')
        // userEvent.click(modalShowButton)
        // expect(getByText('Modal Text')).toBeVisible()
        // // expect(getByText('Basic Modal')).toBeVisible()
    })

    // it('should close modal when button is clicked', async () => {
    //     const { getByText, getByTestId, queryByTestId } = render(
    //         <BasicTemplate />
    //     )

    //     const modalShowButton = getByText('Click Me')

    //     userEvent.click(modalShowButton)

    //     expect(getByTestId('basicModal')).toBeVisible()
    //     expect(getByText('Basic Modal')).toBeVisible()

    //     userEvent.click(getByText('Close'))

    //     expect(queryByTestId('basicModal')).not.toBeInTheDocument()
    // })

    // it('should render a modal with 2 buttons', () => {
    //     const { getByText, getByTestId } = render(<TwoButtonTemplate />)

    //     const modalShowButton = getByText('Click Me')

    //     userEvent.click(modalShowButton)

    //     expect(getByTestId('basicModal')).toBeVisible()
    //     expect(getByText('Close')).toBeVisible()
    //     expect(getByText('Cancel')).toBeVisible()
    // })

    // it('should close modal when close icon is clicked', () => {
    //     const { getByText, getByTestId, getByLabelText, queryByTestId } =
    //         render(<TwoButtonTemplate />)

    //     const modalShowButton = getByText('Click Me')

    //     userEvent.click(modalShowButton)

    //     expect(getByTestId('basicModal')).toBeVisible()

    //     userEvent.click(getByLabelText('close-icon'))

    //     expect(queryByTestId('basicModal')).not.toBeInTheDocument()
    // })
})
