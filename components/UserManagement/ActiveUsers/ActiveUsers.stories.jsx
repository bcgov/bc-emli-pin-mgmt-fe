import ActiveUsers from '.'

export default {
    title: 'Active Users',
    component: ActiveUsers,
    args: {},
}

const Template = (args) => <ActiveUsers></ActiveUsers>

export const PrimaryTemplate = Template.bind({})