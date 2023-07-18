import { Button } from '.'

export default {
	title: 'Button',
	component: Button,
}

const Template = (args) => <Button {...args}>Click me!</Button>

export const Primary = Template.bind({})
export const Secondary = Template.bind({})
export const Danger = Template.bind({})
export const Medium = Template.bind({})
export const Small = Template.bind({})
export const Disabled = Template.bind({})
export const IsDarkBackground = Template.bind({})

Primary.args = {
	variant: 'primary',
	size: 'medium',
	disabled: false,
}

Secondary.args = {
	...Primary.args,
	variant: 'secondary',
}

Danger.args = {
	...Primary.args,
	variant: 'danger',
}

Medium.args = {
	variant: 'primary',
	size: 'medium',
	disabled: false,
}

Small.args = {
	...Medium.args,
	size: 'small',
}

Disabled.args = {
	...Primary.args,
	disabled: true,
}

IsDarkBackground.args = {
	...IsDarkBackground.args,
	disabled: false
}