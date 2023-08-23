import Dropdown from '../components/Dropdown/index'
import Content from '../content.json'
import Modal from '../components/Modal'

export default function PropertyDetails() {
    function modalFunction() {
        console.log('hi')
    }
    return (
        <div>
            <Dropdown
                label={Content.managePINDropdown.label}
                options={[
                    {
                        label: Content.managePINDropdown.recreateOption,
                        value: 'recreate-pin',
                        isDisabled: false,
                    },
                    {
                        label: Content.managePINDropdown.expireOption,
                        value: 'expire-pin',
                        isDisabled: false,
                    },
                    {
                        label: Content.managePINDropdown.viewOption,
                        value: 'view-pin',
                        isDisabled: false,
                    },
                ]}
            ></Dropdown>
            <Modal
                modalHeader="Basic Modal"
                modalId="basicModal"
                open={true}
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
                    // isDarkBackground: true
                    onClickHandler: () => modalFunction(),
                }}
            >
                Modal Text
            </Modal>
        </div>
    )
}
