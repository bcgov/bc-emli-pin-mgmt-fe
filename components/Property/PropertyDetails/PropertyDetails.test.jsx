import { render, waitFor } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './PropertyDetails.stories'
const { PrimaryTemplate } = composeStories(stories)
const axios = require('axios')
jest.mock('axios')
jest.mock('next/config', () => () => ({ publicRuntimeConfig: '{ ... }' }));
describe('<PropertyDetails />', () => {
    it('should render properly', async () => {
        function testFunction() {
            return true
        }

        axios.get.mockResolvedValue({
            data: [
                [
                    {
                        addressLine_1: '123 Test Street',
                        addressLine_2: '',
                        city: 'test city',
                        country: 'Canada',
                        givenName: 'test',
                        landTitleDistrict: '12',
                        lastName_1: 'test',
                        lastName_2: '',
                        livePinId: '123412341234',
                        pids: '123456789',
                        pin: '12341234',
                        postalCode: 'V1V123',
                        provinceAbbreviation: 'BC',
                        provinceLong: '',
                        titleNumber: '123',
                    },
                ],
            ],
        })

        const { container } = await render(
            <PrimaryTemplate reloaded={testFunction} />
        )
        await expect(container.firstChild).toBeTruthy()
    })
})
