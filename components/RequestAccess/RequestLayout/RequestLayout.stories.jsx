import RequestLayout from "."

export default {
    title: 'RequestLayout',
    component: RequestLayout,
    args: {
        userInfo: {
            identity_provider: "idir",
            given_name: "test",
            last_name: "test",
            email: "test@test.ca",
            username: "test123",
            user_guid: "123",
        }
    },
}

const Template = (args) => <RequestLayout {...args}></RequestLayout>

export const PrimaryTemplate = Template.bind({})