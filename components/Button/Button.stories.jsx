import { Button } from '.'

export default {
	title: 'Button',
	component: Button,
}

const PrimaryTemplate = (args) => <Button {...args}>Click me!</Button>

export const Primary = PrimaryTemplate.bind({})
export const Secondary = PrimaryTemplate.bind({})
export const Danger = PrimaryTemplate.bind({})
export const Medium = PrimaryTemplate.bind({})
export const Small = PrimaryTemplate.bind({})
export const Disabled = PrimaryTemplate.bind({})
export const IsDarkBackground = PrimaryTemplate.bind({})
export const IsDanger = PrimaryTemplate.bind({})

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
	variant: 'xlarge',
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

IsDanger.args = {
	...IsDanger.args, 
	disabled: false
}