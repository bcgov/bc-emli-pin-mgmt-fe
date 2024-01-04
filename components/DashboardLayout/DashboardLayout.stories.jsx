import DashboardLayout from "."

export default {
    title: 'Dashboard',
    component: DashboardLayout,
    args: {},
}

const Template = (args) => <DashboardLayout></DashboardLayout>

export const PrimaryTemplate = Template.bind({})