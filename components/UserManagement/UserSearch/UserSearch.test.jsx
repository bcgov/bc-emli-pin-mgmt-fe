import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import { UserManagementContext } from '../../../context/userManagementContext/UserManagementState'

import * as stories from './UserSearch.stories'

const { PrimaryTemplate } = composeStories(stories)

describe('<UserSearch />', () => {
    it('should render properly', async () => {
        const { container } = await render(
            <UserManagementContext.Provider value={
                {
                    tabSelected: 'active',
                    searchString: 'test'
                }
            }>
                <PrimaryTemplate />
            </UserManagementContext.Provider>
        )

        expect(container.firstChild).toBeTruthy()
    })
})