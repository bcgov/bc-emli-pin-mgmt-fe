import { useState } from 'react'

import RadioButton from '.'

export default {
	title: 'RadioButton',
	component: RadioButton,
	args: {
		radioButtonLabel: 'I am a radio button',
		radioButtonId: 'rbBasic',
		radioButtonName: 'rbBasic',
	},
}

export const DefaultTemplate = (args) => {
	const [mockSelectedValue, setMockSelectedValue] = useState()

	return (
		<RadioButton
			{...args}
			selectedValue={mockSelectedValue}
			setSelectedValue={setMockSelectedValue}
		/>
	)
}

export const ErrorTemplate = (args) => {
	const [mockSelectedValue, setMockSelectedValue] = useState()

	return (
		<RadioButton
			{...args}
			hasError={true}
			selectedValue={mockSelectedValue}
			setSelectedValue={setMockSelectedValue}
		/>
	)
}

export const DisabledTemplate = (args) => {
	const [mockSelectedValue, setMockSelectedValue] = useState()

	return (
		<RadioButton
			{...args}
			isDisabled={true}
			selectedValue={mockSelectedValue}
			setSelectedValue={setMockSelectedValue}
		/>
	)
}
