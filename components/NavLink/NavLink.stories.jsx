import NavLink  from '.'

export default {
	title: 'NavLink',
	component: NavLink,
	args: {
		role: 'SuperAdmin',
		href: 'test.ca',
	}
}

const Template = (args) => <NavLink {...args}></NavLink>

export const PrimaryTemplate = Template.bind({})
