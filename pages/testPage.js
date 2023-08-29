import Modal from '../components/Modal/index'
import { useState } from 'react'
import { Button } from '../components/Button'
import PropertyDetailsPage from '../components/Property/PropertyDetailsPage'

export default function TestPage() {
    const [isOpen, setIsOpen] = useState(false)
    function modalFunction() {
        console.log('modal function')
    }
    const env_var = process.env.TEST_VAR
    return (
        <div>
            {/* <h1>Test Page {env_var}</h1>
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
            </Modal> */}
            <PropertyDetailsPage></PropertyDetailsPage>
        </div>
    )
}
