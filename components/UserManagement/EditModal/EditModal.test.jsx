import { render, screen, fireEvent } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import { UserManagementContext } from '../../../context/userManagementContext/UserManagementState'

import * as stories from './EditModal.stories'

const { PrimaryTemplate } = composeStories(stories)

jest.mock('next/config', () => () => ({ publicRuntimeConfig: '{ ... }' }))
const axios = require('axios')
jest.mock('axios')

describe('<EditModal />', () => {
    afterEach(() => {
        jest.restoreAllMocks()
    })
    it('should render properly', async () => {
        axios.put.mockResolvedValue({
            data: '',
        })
        const { container } = await render(
            <UserManagementContext.Provider
                value={{
                    rowSelected: [
                        {
                            deactivationReason: null,
                            email: 'test@test.ca',
                            givenName: 'Test',
                            identityType: 'idir',
                            isActive: true,
                            lastName: 'Test',
                            organization: 'Test',
                            role: 'SuperAdmin',
                            updatedAt: '2023-12-21T20:24:28.606Z',
                            userGuid: '123ABC',
                            userId: '123abc',
                            userName: 'Test123',
                        },
                    ],
                }}
            >
                <PrimaryTemplate />
            </UserManagementContext.Provider>
        )

        fireEvent.change(screen.getByTestId('givenName'), {
            target: { value: 'test name' },
        })
        fireEvent.change(screen.getByTestId('lastName'), {
            target: { value: 'test first name' },
        })
        fireEvent.change(screen.getByTestId('givenName'), {
            target: { value: 'test last name' },
        })
        fireEvent.change(screen.getByTestId('userName'), {
            target: { value: 'test username' },
        })
        fireEvent.change(screen.getByTestId('givenName'), {
            target: { value: 'test name' },
        })
        fireEvent.change(screen.getByTestId('organization'), {
            target: { value: 'test organization' },
        })
        fireEvent.change(screen.getByTestId('email'), {
            target: { value: 'test email' },
        })
        fireEvent.click(screen.getByTestId('modalMainBtn'))

        expect(container.firstChild).toBeTruthy()
    })
})
