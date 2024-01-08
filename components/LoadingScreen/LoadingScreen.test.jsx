import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './LoadingScreen.stories'

const { Template } = composeStories(stories)

describe('Loading screen', () => {
	it('renders', () => {
		const { container } = render(<Template />)
		expect(container.firstChild).toBeTruthy()
	})
})
