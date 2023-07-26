// /* eslint-disable testing-library/prefer-screen-queries */
// /* eslint-disable testing-library/no-node-access */
import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './Link.stories'

const { PrimaryTemplate } = composeStories(stories)

describe('<Link />', () => {
	it('should render properly', () => {
		const { container } = render(<PrimaryTemplate />)

		expect(container.firstChild).toBeTruthy()
	})
})
