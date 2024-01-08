import CheckBox from './index'

export default {
	title: 'CheckBox',
	component: CheckBox,
}

const Template = (args) => {
	return <CheckBox {...args} />
}

export const Default = Template.bind({})
Default.args = {
	checkboxId: 'chkBasic',
	checkboxLabel: `I'm a checkbox`,
	checkboxName: 'chkBasic',
}

export const Disabled = Template.bind({})
Disabled.args = {
	checkboxId: 'chkBasic',
	checkboxLabel: `I'm a checkbox`,
	checkboxName: 'chkBasic',
	isDisabled: true,
}

export const Error = Template.bind({})
Error.args = {
	checkboxId: 'chkBasic',
	checkboxLabel: `I'm a checkbox`,
	checkboxName: 'chkBasic',
	hasError: true,
}
