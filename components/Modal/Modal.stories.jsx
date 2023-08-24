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
    const [isOpen, setIsOpen] = useState(false)
    function modalFunction() {
        console.log('modal function')
    }

    return (
        <>
            <Modal
                modalHeader="Basic Modal"
                modalId="basicModal"
                isOpen={true}
                setIsOpen={setIsOpen}
                modalMainBtn={{
                    text: 'Close',
                    size: 'medium',
                    variant: 'primary',
                    onClickHandler: () => modalFunction(),
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
