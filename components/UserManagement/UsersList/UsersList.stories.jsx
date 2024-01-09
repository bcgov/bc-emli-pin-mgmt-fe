import UsersList from '.'

export default {
    title: 'Users List',
    component: UsersList,
    args: {},
}

const Template = (args) => <UsersList></UsersList>

export const PrimaryTemplate = Template.bind({})