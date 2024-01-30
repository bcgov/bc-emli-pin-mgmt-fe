import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './AddressCard.stories'

const { PrimaryTemplate } = composeStories(stories)

jest.mock('../../public/snowplow', () => ({
    customSnowplowCall: jest.fn(() => {}),
}));

describe('<AddressCard />', () => {
    it('should render properly', () => {
        const { container } = render(<PrimaryTemplate />)

        expect(container.firstChild).toBeTruthy()
    })
})
