import ManagePINDropdown from '.'

export default {
    title: 'ManagePINDropdown',
    component: ManagePINDropdown,
    args: {},
}

const Template = (args) => <ManagePINDropdown {...args} />

export const PrimaryTemplate = Template.bind({
    role: "Admin"
})

export const SuperAdminTemplate = Template.bind({})
SuperAdminTemplate.args = {
    role: "SuperAdmin"
}
