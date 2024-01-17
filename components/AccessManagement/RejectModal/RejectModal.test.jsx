import { render, fireEvent, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import { AccessContext } from '../../../context/accessContext/AccessState'
import axios from 'axios'

import * as stories from './RejectModal.stories'

const { PrimaryTemplate } = composeStories(stories)

jest.mock('next/config', () => () => ({ publicRuntimeConfig: '{ ... }' }));

describe('<RejectModal />', () => {
    it('should render properly', () => {
        const { container } = render(<PrimaryTemplate />)

        expect(container.firstChild).toBeTruthy()
    })
    it('should render properly with reject request button click', async () => {
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