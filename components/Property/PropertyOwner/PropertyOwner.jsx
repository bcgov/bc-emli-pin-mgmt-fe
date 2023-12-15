import PropTypes from 'prop-types'
import Styles from './PropertyOwner.module.css'
import Content from '../../../assets/content/content.json'
import { Button } from '../../Button/index'
import { useState } from 'react'
import ManagePINDropdown from '../ManagePINDropdown/index'
import HttpRequest from '../../../apiManager/httpRequestHandler'
import ViewPINModal from '../ViewPINModal/ViewPINModal'
import ExpirePINModal from '../ExpirePINModal'
import RegeneratePINModal from '../RegeneratePINModal/RegeneratePINModal'
import ViewPINHistoryModal from '../ViewPINHistoryModal/ViewPINHisoryModal'

function PropertyOwner({
    fullName,
    mailingAddress,
    livePinId,
    livePIN,
    expiredByUsername,
    propertyAddress,
    role,
    siteId,
    reloadPage,
}) {
    const [getMangePINSelection, setGetMangePINSelection] = useState()
    const [openViewPINModal, setOpenViewPINModal] = useState()
    const [openExpirePINModal, setOpenExpirePINModal] = useState()
    const [openRegeneratePINModal, setOpenRegeneratePINModal] = useState()
    const [openViewPINHistoryModal, setOpenViewPINHistoryModal] = useState()
    const [pinHistory, setPinHistory] = useState(null)

    function getPINHistory() {
        HttpRequest.getPINHistory(livePinId)
            .then((response) => {
                setPinHistory(response.data.logs)
            })
            .catch((error) => {
                setPinHistory('error')
            })
    }

    function handleMangePINSelection(value) {
        setGetMangePINSelection(value)
        if (value === Content.managePINDropdown.valueOptions.regenerate) {
            setOpenRegeneratePINModal(true)
        } else if (value === Content.managePINDropdown.valueOptions.expire) {
            setOpenExpirePINModal(true)
        } else if (value === Content.managePINDropdown.valueOptions.view) {
            setOpenViewPINModal(true)
        } else if (value === Content.managePINDropdown.valueOptions['view-history']) {
            getPINHistory()
            setOpenViewPINHistoryModal(true)
        }
    }

    function formatMailingAddress(mailingAddress) {
        const formattedMailingAddress = mailingAddress?.split('\n').map((str, i) => <p key={i}>{str}</p>);
        return formattedMailingAddress;
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
                    <div className={`${Styles.content}`}>{formatMailingAddress(mailingAddress)}</div>
                </div>
            </div>
            <div className={`${Styles.buttonWrap}` + ' flex justify-start'}>
                <div className={`${Styles.buttonItem}`}>
                    <ManagePINDropdown 
                        livePIN={livePIN}
                        handleSelection={handleMangePINSelection}
                        role={role}
                        ariaLabel={Content.managePINDropdown.label}
                    />
                </div>
                <ViewPINModal 
                    isOpen={openViewPINModal}
                    setIsOpen={setOpenViewPINModal}
                    livePIN={livePIN}
                />
                <ExpirePINModal 
                    isOpen={openExpirePINModal}
                    setIsOpen={setOpenExpirePINModal}
                    livePinId={livePinId}
                    propertyAddress={propertyAddress}
                />
                <RegeneratePINModal 
                    isOpen={openRegeneratePINModal}
                    setIsOpen={setOpenRegeneratePINModal}
                    livePinId={livePinId}
                    propertyAddress={propertyAddress}
                    siteId={siteId}
                    reloadPage={reloadPage}
                />
                <ViewPINHistoryModal
                    isOpen={openViewPINHistoryModal}
                    setIsOpen={setOpenViewPINHistoryModal}
                    livePinId={livePinId}
                    pinHistory={pinHistory}
                />
            </div>
        </div>
    )
}

export default PropertyOwner

PropertyOwner.protoTypes = {
    fullName: PropTypes.string,
    mailingAddress: PropTypes.string,
    propertyAddress: PropTypes.string
}
