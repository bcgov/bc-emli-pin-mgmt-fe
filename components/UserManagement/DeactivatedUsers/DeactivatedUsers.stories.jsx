import DeactivatedUsers from '.'

export default {
    title: 'Deactivated Users',
    component: DeactivatedUsers,
    args: {},
}

const Template = (args) => <DeactivatedUsers></DeactivatedUsers>

export const PrimaryTemplate = Template.bind({})