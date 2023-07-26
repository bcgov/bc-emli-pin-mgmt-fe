import Link from './Link'

export default {
	title: 'Link',
	component: Link,
	args: {
		linkId: 'btnBasic',
		href: 'https://openai.com/blog/chatgpt',
	},
}

const Template = (args) => <Link {...args}>Click me!</Link>

export const PrimaryTemplate = Template.bind({})

export const DangerTemplate = Template.bind({})
DangerTemplate.args = {
	variant: 'danger',
}

export const WarningTemplate = Template.bind({})
WarningTemplate.args = {
	variant: 'warning',
}

export const SecondaryTemplate = Template.bind({})
SecondaryTemplate.args = {
	variant: 'secondary',
}

export const SuccessTemplate = Template.bind({})
SuccessTemplate.args = {
	variant: 'success',
}

export const DisabledTemplate = Template.bind({})
DisabledTemplate.args = {
	variant: 'disabled',
}