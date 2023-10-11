import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import userEvent from '@testing-library/user-event'

import * as stories from './dropdown.stories'

const { PrimaryTemplate } = composeStories(stories)

describe('<Dropdown />', () => {
    it('should render properly', () => {
        const { container } = render(<PrimaryTemplate />)
        expect(container.firstChild).toBeTruthy()
    })

    it('should render the options', async () => {
        const { getByTestId, findByText } = render(<PrimaryTemplate />)

        userEvent.click(getByTestId('dropdown-btn'))

        expect(await findByText('Option 1')).toBeVisible()
    })

    it('should show option by using Tab', async () => {
        const { findByText } = render(
            <PrimaryTemplate onChangeHandler={jest.fn()} />
        )

        userEvent.tab()
        userEvent.keyboard('{Enter}')
        expect(await findByText('Option 1')).toBeVisible()
    })

    it('should show selected option', async () => {
        const { getByTestId, findByText, getByText } = render(
            <PrimaryTemplate onChangeHandler={jest.fn()} />
        )

        userEvent.click(getByTestId('dropdown-btn'))
        expect(await findByText('Option 1')).toBeVisible()

        userEvent.click(getByText('Option 1'))
        expect(await findByText('Option 1')).toBeVisible()
    })

    it('should show selected option by using the keyboard', async () => {
        const { getByTestId, findByText, getByText } = render(
            <PrimaryTemplate onChangeHandler={jest.fn()} />
        )

        getByTestId('dropdown-btn').focus()

        userEvent.keyboard('{Enter}')
        expect(await findByText('Option 2')).toBeVisible()

        getByText('Option 2').focus()
        userEvent.keyboard('{Enter}')
        expect(await findByText('Option 2')).toBeVisible()
    })

    it('should not close dropdown if disabled option is selected', async () => {
        const { getByTestId, findByText, getByText } = render(
            <PrimaryTemplate onChangeHandler={jest.fn()} />
        )

        userEvent.click(getByTestId('dropdown-btn'))
        expect(await findByText('Option 3')).toBeVisible()

        userEvent.click(getByText('Option 3'))
        expect(await findByText('Option 1')).toBeVisible()
    })
})
