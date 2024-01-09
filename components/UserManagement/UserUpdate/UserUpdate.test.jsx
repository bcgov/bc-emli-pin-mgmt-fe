import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import { UserManagementContext } from '../../../context/userManagementContext/UserManagementState'

import * as stories from './UserUpdate.stories'

const { PrimaryTemplate } = composeStories(stories)

describe('<UserUpdate />', () => {
    it('should render properly', async () => {
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
                    usersList: [{
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
                    }]
                }
            }>
                <PrimaryTemplate />
            </UserManagementContext.Provider>
        )

        expect(container.firstChild).toBeTruthy()
    })
})