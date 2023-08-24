import { useState } from 'react'

import Modal from '.'
import { Button } from '../Button/index'

export default {
    title: 'Modal',
    component: Modal,
    args: {
        modalHeader: 'Basic Modal',
        modalId: 'basicModal',
    },
}

const Template = (args) => {
    const [mockIsOpen, setMockIsOpen] = useState(false)

    return (
        <>
            <Button
                handleOnClick={() => setMockIsOpen(true)}
                variant="primary"
                size="medium"
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
            >
                Modal Text
            </Modal>
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
