import { render, fireEvent, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import { AccessContext } from '../../../context/accessContext/AccessState'

import * as stories from './GrantModal.stories'

const { PrimaryTemplate } = composeStories(stories)

jest.mock('next/config', () => () => ({ publicRuntimeConfig: '{ ... }' }));
const axios = require('axios')
jest.mock('axios')

describe('<GrantModal />', () => {
    afterEach(() => {
        jest.restoreAllMocks()
    })
    it('should render properly', async () => {
        const { container } = await render(<PrimaryTemplate />)

        expect(container.firstChild).toBeTruthy()
        expect(screen.getByText('Grant request?')).toBeTruthy()
    })

    it('should render properly with grant request button click', async () => {
        axios.put.mockResolvedValue({
            data: "",
        })

        const { container } = await render(
            <AccessContext.Provider value={{rowSelected: [{
                requestId: '123',
                email: 'test@test.ca',
                givenName: 'test',
                lastName: 'test',
                requestedRole: 'Admin'
            }]}}>
                <PrimaryTemplate />
            </AccessContext.Provider>
        )
        fireEvent.click(screen.getByTestId('modalMainBtn'))

        expect(container.firstChild).toBeTruthy()
    })

    it('should render properly with multiple rows selected', async () => {
        const { container } = await render(
            <AccessContext.Provider value={{rowSelected: [{
                requestId: '123',
                email: 'test@test.ca',
                givenName: 'test',
                lastName: 'test',
                requestedRole: 'Admin'
            },
            {
                requestId: '124',
                email: 'test2@test.ca',
                givenName: 'test2',
                lastName: 'test2',
                requestedRole: 'Admin'
            }]}}>
                <PrimaryTemplate />
            </AccessContext.Provider>
        )

        expect(container.firstChild).toBeTruthy()
    })
})
