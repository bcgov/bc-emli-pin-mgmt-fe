import UserManagementLayout from '.'

export default {
    title: 'Active Users',
    component: UserManagementLayout,
    args: {},
}

const Template = (args) => <UserManagementLayout></UserManagementLayout>

export const PrimaryTemplate = Template.bind({})