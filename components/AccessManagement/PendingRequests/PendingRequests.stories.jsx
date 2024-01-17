import PendingRequests from "./index"

export default {
    title: 'Pending Requests',
    component: PendingRequests,
    args: {},
}

const Template = (args) => <PendingRequests></PendingRequests>

export const PrimaryTemplate = Template.bind({})