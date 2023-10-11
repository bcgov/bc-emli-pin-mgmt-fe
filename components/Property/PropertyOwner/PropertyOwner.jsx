import PropTypes from 'prop-types'
import Styles from './PropertyOwner.module.css'
import Content from '../../../assets/content/content.json'
import { Button } from '../../Button/index'
import { useState } from 'react'
import ManagePINDropdown from '../ManagePINDropdown/index'
import ViewPINHistory from '../ViewPINHistory/ViewPINHistory'
import Modal from '../../Modal'
import HttpRequest from '../../../apiManager/httpRequestHandler'
import ViewPINModal from '../ViewPINModal/ViewPINModal'
import ExpirePINModal from '../ExpirePINModal'
import RegeneratePINModal from '../RegeneratePINModal/RegeneratePINModal'

function PropertyOwner({ 
    fullName, 
    mailingAddress, 
    livePinId, 
    livePIN, 
    expiredByUsername 
}) {
    const [openPINHistoryModal, setOpenPINHistoryModal] = useState(false)
    const [openPINHistoryFailureModal, setOpenPINHistoryFailureModal] = useState(false)
    const [pinHistory, setPinHistory] = useState(null)
    const [getMangePINSelection, setGetMangePINSelection] = useState()
    const [openViewPINModal, setOpenViewPINModal] = useState()
    const [openExpirePINModal, setOpenExpirePINModal] = useState()
    const [openRegenertePINModal, setOpenRegenertePINModal] = useState()

    function getPINHistory() {
        HttpRequest.getPINHistory(livePinId)
            .then((response) => {
                setPinHistory(response.data.logs)
                setOpenPINHistoryModal(true)
            })
            .catch((error) => {
                setOpenPINHistoryFailureModal(true)
            })
    }

    function handleMangePINSelection (value){
        setGetMangePINSelection(value)
        if (value === Content.managePINDropdown.valueOptions.regenerate) {
            setOpenRegenertePINModal(true)
        } else if (value === Content.managePINDropdown.valueOptions.expire) {
            setOpenExpirePINModal(true)
        } else if (value === Content.managePINDropdown.valueOptions.view) {
            setOpenViewPINModal(true)
        }
    }

    return (
        <div className={`${Styles.ownerInfoCardWrap}` + ' text-left'}>
            <div className={`${Styles.title}`}>
                {Content.propertyDetails.owner}
            </div>
            <div className="flex">
                <div className={`${Styles.infoDetailWrap}`}>
                    <div className={`${Styles.title}`}>
                        {Content.propertyDetails.fullname}
                    </div>
                    <div className={`${Styles.content}`}>{fullName}</div>
                </div>
                <div className={`${Styles.infoDetailWrap}`}>
                    <div className={`${Styles.title}`}>
                        {Content.propertyDetails.mailingAddress}
                    </div>
                    <div className={`${Styles.content}`}>{mailingAddress}</div>
                </div>
            </div>
            <div className={`${Styles.buttonWrap}` + ' flex justify-start'}>
                <div className={`${Styles.buttonItem}`}>
                    <ManagePINDropdown 
                        showPINOption={true} 
                        livePIN={livePIN}
                        handleSelection={handleMangePINSelection}/>
                </div>
                <div className={`${Styles.buttonItem}`}>
                    <Button
                        variant="secondary"
                        isDarkBackground={false}
                        disabled={false}
                        aria-disabled={false}
                        handleOnClick={() => getPINHistory()}
                    >
                        {Content.propertyDetails.viewPINHistory}
                    </Button>
                </div>
                <Modal
                    modalHeader={Content.pinHistoryModal.title}
                    modalId="pin-history-modal"
                    isOpen={openPINHistoryModal}
                    setIsOpen={setOpenPINHistoryModal}
                    modalMainBtn={{
                        text: Content.pinHistoryModal.primaryButton,
                        size: 'medium',
                        variant: 'primary',
                        onClickHandler: () => setOpenPINHistoryModal(false),
                    }}
                >
                    <ViewPINHistory pinHistory={pinHistory} />
                </Modal>
                <Modal
                    modalHeader={Content.pinHistoryFailureModal.title}
                    modalId="pin-history-failure-modal"
                    isOpen={openPINHistoryFailureModal}
                    setIsOpen={setOpenPINHistoryFailureModal}
                    variant="error"
                    modalMainBtn={{
                        text: Content.pinHistoryFailureModal.primaryButton,
                        size: 'medium',
                        variant: 'primary',
                        onClickHandler: () => getPINHistory(),
                    }}
                    modalSecondaryBtn={{
                        text: Content.pinHistoryFailureModal.secondaryButton,
                        size: 'medium',
                        variant: 'primary',
                        onClickHandler: () =>
                            setOpenPINHistoryFailureModal(false),
                    }}
                >
                    {Content.pinHistoryFailureModal.body}
                </Modal>
                <ViewPINModal 
                    isOpen={openViewPINModal}
                    setIsOpen={setOpenViewPINModal}
                    livePIN={livePIN}
                />
                <ExpirePINModal 
                    isOpen={openExpirePINModal}
                    setIsOpen={setOpenExpirePINModal}
                    livePinId={livePinId}
                />
                <RegeneratePINModal 
                    isOpen={openRegenertePINModal}
                    setIsOpen={setOpenRegenertePINModal}
                    livePinId={livePinId}
                />
            </div>
        </div>
    )
}

export default PropertyOwner

PropertyOwner.protoTypes = {
    fullName: PropTypes.string,
    mailingAddress: PropTypes.string,
}
