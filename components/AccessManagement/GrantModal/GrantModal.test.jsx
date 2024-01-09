import { render, fireEvent, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import { AccessContext } from '../../../context/accessContext/AccessState'
import axios from 'axios'

import * as stories from './GrantModal.stories'

const { PrimaryTemplate } = composeStories(stories)

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
        jest.spyOn(axios, 'put')
        jest.spyOn(axios, 'get')
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
})
