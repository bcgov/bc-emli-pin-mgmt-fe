import { render } from '@testing-library/react'

import LoadingScreen from './index'

import LoadingIcon from '../../assets/svgs/LoadingIcon'

const validProps = {
	loadingText: 'text',
}

describe('Loading screen', () => {
	it('renders', () => {
		const { container } = render(
			<LoadingScreen loaderIcon={<LoadingIcon />} {...validProps} />
		)

		expect(container.firstChild).toBeTruthy()
	})
})
