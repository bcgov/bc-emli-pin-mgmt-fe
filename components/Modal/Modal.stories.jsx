import { useState } from 'react'

import Modal from '.'
import TextBox from '../Textbox/index'
import Button from '../Button/index'

export default {
    title: 'Modal',
    component: Modal,
    args: {
        modalHeader: 'Basic Modal',
        modalId: 'basicModal',
        children: <p>Modal Text</p>,
    },
}

const Template = (args) => {
    const [mockIsOpen, setMockIsOpen] = useState(false)

    return (
        <>
            <Button
                buttonId="btnOpenModal"
                onClickHandler={() => setMockIsOpen(true)}
                variant="primary"
            >
                Click Me
            </Button>

            <Modal
                {...args}
                isOpen={mockIsOpen}
                setIsOpen={setMockIsOpen}
                modalMainBtn={{
                    id: 'btnCloseModal',
                    text: 'Close',
                    size: '',
                    variant: 'primary',
                    onClickHandler: () => setMockIsOpen(false),
                }}
            ></Modal>
        </>
    )
}

export const BasicTemplate = Template.bind({})

export const TwoButtonTemplate = Template.bind({})
TwoButtonTemplate.args = {
    modalSecondaryBtn: {
        id: 'btnCancel',
        text: 'Cancel',
        size: 'small',
        variant: 'danger',
        onClickHandler: () => {},
    },
}

export const FormModalTemplate = Template.bind({})
FormModalTemplate.args = {
    modalHeader: 'Login Form',
    children: (
        <div>
            <TextBox
                textBoxId="txtUsername"
                textBoxLabel="Username"
                textBoxFooter="Please Enter a username."
            ></TextBox>

            <TextBox
                textBoxId="txtPassword"
                textBoxLabel="Password"
                textBoxFooter="Please enter a password."
            ></TextBox>
        </div>
    ),
}
