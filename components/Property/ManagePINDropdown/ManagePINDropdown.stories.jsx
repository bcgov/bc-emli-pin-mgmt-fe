import ManagePINDropdown from '.'

export default {
    title: 'ManagePINDropdown',
    component: ManagePINDropdown,
    args: {},
}

const Template = (args) => <ManagePINDropdown {...args} />

export const PrimaryTemplate = Template.bind({})

export const SuperAdminTemplate = Template.bind({})
SuperAdminTemplate.args = {
    showPINOption: true,
}
