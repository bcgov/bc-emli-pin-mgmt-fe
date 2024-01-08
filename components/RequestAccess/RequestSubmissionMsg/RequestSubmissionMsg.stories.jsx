import RequestSubmissionMsg from "."

export default {
    title: 'RequestSubmissionMsg',
    component: RequestSubmissionMsg,
    args: {},
}

const Template = (args) => <RequestSubmissionMsg {...args}></RequestSubmissionMsg>

export const PrimaryTemplate = Template.bind({})