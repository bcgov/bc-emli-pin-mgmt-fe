import { render, screen, within } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import axios from 'axios'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom'

import * as stories from './searchResults.stories'
jest.mock('next/config', () => () => ({ publicRuntimeConfig: '{ ... }' }));
const { Template } = composeStories(stories)

describe('<SearchResults />', () => {
    afterEach(() => {
        jest.restoreAllMocks()
    })
    const mockAPICallWith8Results = {
        data: {
            results: [
                {
                    score: 89,
                    fullAddress: '50 Main St, Fort Babine, BC',
                    siteID: 'bcd100ae-e034-4686-a9a6-e85bf55f1281',
                },
                {
                    score: 85,
                    fullAddress: '50 St. Andrews Ave, North Vancouver, BC',
                    siteID: '8cdd9dda-59e5-4f32-bb51-6a40f2e11be5',
                },
                {
                    score: 85,
                    fullAddress: '50 St. Georges Ave, North Vancouver, BC',
                    siteID: '79a6379d-05e7-4ff7-8080-4d7ed3be1ba3',
                },
                {
                    score: 85,
                    fullAddress: '50 St. Charles St, Victoria, BC',
                    siteID: '2e62079b-54d4-46b2-b65b-584f3f99d271',
                },
                {
                    score: 85,
                    fullAddress: '50 St. Davids Ave, North Vancouver, BC',
                    siteID: '1953a527-712c-477e-870c-b95454238fd4',
                },
                {
                    score: 85,
                    fullAddress: '50 St. Patricks Ave, North Vancouver, BC',
                    siteID: 'd221be36-993d-45e4-9c96-929b43b474af',
                },
                {
                    score: 77,
                    fullAddress: '50 Sweetwater Pl, Lions Bay, BC',
                    siteID: '4717d90f-84cf-4acf-85e0-279d48ea1c7a',
                },
                {
                    score: 77,
                    fullAddress: '50 Mansion Rd, Hagwilget, BC',
                    siteID: 'e4904260-82a1-4919-9bc8-c042a0a3b681',
                },
            ],
        },
    }

    const mockAPICallWith0Results = {
        data: {
            results: [],
        },
    }

    it('should render properly with 8 results', async () => {
        jest.spyOn(axios, 'get').mockResolvedValueOnce(mockAPICallWith8Results)
        const { container } = await act(async () => render(<Template />))
        const { getByText } = within(screen.getByTestId('searchResultTitle'))
        expect(container.firstChild).toBeTruthy()
    })

    it('should render properly with 0 results', async () => {
        jest.spyOn(axios, 'get').mockResolvedValueOnce(mockAPICallWith0Results)
        const { container } = await act(async () => render(<Template />))
        const { getByText } = within(screen.getByTestId('searchResultTitle'))
        expect(container.firstChild).toBeTruthy()
        expect(getByText('Addresses found: 0')).toBeInTheDocument()
    })
})
