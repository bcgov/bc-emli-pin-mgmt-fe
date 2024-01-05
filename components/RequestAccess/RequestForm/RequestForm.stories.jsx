import RequestForm from "."

export default {
    title: 'RequestForm',
    component: RequestForm,
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

const Template = (args) => <RequestForm {...args}></RequestForm>

export const PrimaryTemplate = Template.bind({})