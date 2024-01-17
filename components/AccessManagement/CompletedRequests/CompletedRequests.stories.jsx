import CompletedRequests from "./index"

export default {
    title: 'Completed Requests',
    component: CompletedRequests,
    args: {},
}

const Template = (args) => <CompletedRequests></CompletedRequests>

export const PrimaryTemplate = Template.bind({})