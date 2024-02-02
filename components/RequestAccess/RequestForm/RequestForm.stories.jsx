import RequestForm from "."
import { useState } from "react"

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
        },
    },
}

const Template = (args) => {
    const [showForm, setShowForm] = useState(true)

    return (
        <RequestForm {...args} setShowForm={setShowForm} showForm={showForm}></RequestForm>
    )
}

export const PrimaryTemplate = Template.bind({})