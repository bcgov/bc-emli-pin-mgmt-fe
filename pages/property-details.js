import Dropdown from '../components/Dropdown/index'
import Content from '../content.json'
import Modal from '../components/Modal'
import { useState } from 'react'
import { Button } from '../components/Button'

export default function PropertyDetails() {
    const [isOpen, setIsOpen] = useState(false)
    function modalFunction() {
        console.log('hi')
    }
    return (
        <div>
            <Button
                handleOnClick={() => setIsOpen(true)}
                variant="primary"
                size="medium"
            >
                Click Me
            </Button>
            <Modal
                modalHeader="Basic Modal"
                modalId="basicModal"
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                modalMainBtn={{
                    text: 'Close',
                    size: 'medium',
                    variant: 'primary',
                    onClickHandler: () => modalFunction(),
                }}
                modalSecondaryBtn={{
                    id: 'btnCloseModal',
                    text: 'Close',
                    size: '',
                    variant: 'secondary',
                    onClickHandler: () => modalFunction(),
                }}
            >
                Modal Text
            </Modal>
        </div>
    )
}
