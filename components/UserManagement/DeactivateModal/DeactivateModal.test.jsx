import { render, fireEvent, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import { UserManagementContext } from '../../../context/userManagementContext/UserManagementState'
import axios from 'axios'

import * as stories from './DeactivateModal.stories'

const { PrimaryTemplate } = composeStories(stories)

describe('<DeactivateModal />', () => {
    afterEach(() => {
        jest.restoreAllMocks()
    })
    it('should render properly', async () => {
        jest.spyOn(axios, 'put')
        jest.spyOn(axios, 'get')

        const { container } = await render(
            <UserManagementContext.Provider value={
                {
                    rowSelected: [{
                        deactivationReason: null,
                        email: "test@test.ca",
                        givenName: "Test",
                        identityType: "idir",
                        isActive: true,
                        lastName: "Test",
                        organization: "Test",
                        role: "SuperAdmin",
                        updatedAt: "2023-12-21T20:24:28.606Z",
                        userGuid: "123ABC",
                        userId: "123abc",
                        userName: "Test123"
                    }],
                }
            }>
                <PrimaryTemplate />
            </UserManagementContext.Provider>
        )
        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test' } })
        fireEvent.click(screen.getByTestId('modalMainBtn'))

        expect(container.firstChild).toBeTruthy()
    })

    it('should render properly with multiple rows', async () => {
        const { container } = await render(
            <UserManagementContext.Provider value={
                {
                    rowSelected: [
                        {
                            deactivationReason: null,
                            email: "test@test.ca",
                            givenName: "Test",
                            identityType: "idir",
                            isActive: true,
                            lastName: "Test",
                            organization: "Test",
                            role: "SuperAdmin",
                            updatedAt: "2023-12-21T20:24:28.606Z",
                            userGuid: "123ABC",
                            userId: "123abc",
                            userName: "Test123"
                        },
                        {
                            deactivationReason: null,
                            email: "test1@test.ca",
                            givenName: "Test1",
                            identityType: "idir",
                            isActive: true,
                            lastName: "Test1",
                            organization: "Test",
                            role: "Admin",
                            updatedAt: "2023-12-21T20:24:28.606Z",
                            userGuid: "223ABC",
                            userId: "223abc",
                            userName: "Test223"
                        },
                    ],
                }
            }>
                <PrimaryTemplate />
            </UserManagementContext.Provider>
        )
        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test' } })
        fireEvent.click(screen.getByTestId('modalSecondaryBtn'))

        expect(container.firstChild).toBeTruthy()
    })


})