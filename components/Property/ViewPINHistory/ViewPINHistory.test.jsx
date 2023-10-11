import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

import * as stories from './ViewPINHistory.stories'
const { PrimaryTemplate, MultipleRowsTemplate } = composeStories(stories)

describe('<ViewPINHistory />', () => {
    it('should render properly with no rows', () => {
        const { container } = render(<PrimaryTemplate />)
        expect(container.firstChild).toBeTruthy()
    })

    it('should have all the expected columns', () => {
        const { getByText } = render(<PrimaryTemplate />)
        expect(getByText('#')).toBeVisible()
        expect(getByText('Updated by')).toBeVisible()
        expect(getByText('Username')).toBeVisible()
        expect(getByText('Modified on')).toBeVisible()
        expect(getByText('Action')).toBeVisible()
        expect(getByText('Type')).toBeVisible()
        expect(getByText('Notification via')).toBeVisible()
    })

    it('should render properly with have 3 rows and 3 usernames', () => {
        const { getByText } = render(<MultipleRowsTemplate />)
        expect(getByText('jsmith1')).toBeVisible()
        expect(getByText('jsmith2')).toBeVisible()
        expect(getByText('jsmith3')).toBeVisible()
        expect(getByText('jsmith4')).toBeVisible()
        expect(() => getByText('jsmith5')).toThrow('Unable to find an element')
    })

    it('should properly format actions', () => {
        const { getAllByText, getByText } = render(<MultipleRowsTemplate />)
        expect(getAllByText('PIN deleted')[0]).toBeVisible()
        expect(getByText('PIN created')).toBeVisible()
        expect(getByText('PIN regenerated')).toBeVisible()
    })

    it('should properly format actions', () => {
        const { getByText } = render(<MultipleRowsTemplate />)
        expect(getByText('Opt-out')).toBeVisible()
        expect(getByText('Call center PIN reset')).toBeVisible()
        expect(getByText('Online PIN reset')).toBeVisible()
        expect(getByText('Change of ownership')).toBeVisible()
    })
})
