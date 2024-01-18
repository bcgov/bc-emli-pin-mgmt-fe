import { render, fireEvent, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import { AccessContext } from '../../../context/accessContext/AccessState'

import * as stories from './RejectModal.stories'

const { PrimaryTemplate } = composeStories(stories)

jest.mock('next/config', () => () => ({ publicRuntimeConfig: '{ ... }' }))
const axios = require('axios')
jest.mock('axios')

describe('<RejectModal />', () => {
    it('should render properly', () => {
        const { container } = render(<PrimaryTemplate />)

        expect(container.firstChild).toBeTruthy()
    })
    it('should render properly with reject request button click', async () => {
        axios.put.mockResolvedValue({
            data: '',
        })
        const { container } = await render(
            <AccessContext.Provider
                value={{
                    rowSelected: [
                        {
                            requestId: '123',
                            email: 'test@test.ca',
                            givenName: 'test',
                            lastName: 'test',
                            requestedRole: 'Admin',
                        },
                    ],
                }}
            >
                <PrimaryTemplate />
            </AccessContext.Provider>
        )

        fireEvent.change(screen.getByTestId('text-area'), {
            target: { value: 'test' },
        })
        fireEvent.click(screen.getByTestId('modalMainBtn'))

        expect(container.firstChild).toBeTruthy()
    })

    it('should render properly with multiple rows selected', async () => {
        const { container } = await render(
            <AccessContext.Provider
                value={{
                    rowSelected: [
                        {
                            requestId: '123',
                            email: 'test@test.ca',
                            givenName: 'test',
                            lastName: 'test',
                            requestedRole: 'Admin',
                        },
                        {
                            requestId: '124',
                            email: 'test2@test.ca',
                            givenName: 'test2',
                            lastName: 'test2',
                            requestedRole: 'Admin',
                        },
                    ],
                }}
            >
                <PrimaryTemplate />
            </AccessContext.Provider>
        )

        expect(container.firstChild).toBeTruthy()
    })
})
