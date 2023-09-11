import PropTypes from 'prop-types'
import Styles from './PropertyOwner.module.css'
import Content from '../../../content.json'
import { Button } from '../../Button/index'
import { useState } from 'react'
import ManagePINDropdown from '../ManagePINDropdown/index'
import ViewPINModal from '../ViewPINModal/ViewPINModal'
import ExpirePINModal from '../ExpirePINModal'
import ViewPINHistoryModal from '../ViewPINHistoryModal'

function PropertyOwner({
    fullName,
    mailingAddress,
    livePinId,
    livePIN,
    expirationReason,
    expiredByName,
    expiredByUsername,
}) {
    const [getMangePINSelection, setGetMangePINSelection] = useState()
    const [openViewPINModal, setOpenViewPINModal] = useState()
    const [openExpirePINModal, setOpenExpirePINModal] = useState()
    const [openViewPINHistoryModal, setOpenViewPINHistoryModal] = useState()

    function handleMangePINSelection(value) {
        setGetMangePINSelection(value)
        if (value === 'expire-pin') {
            setOpenExpirePINModal(true)
            // TODO expire popup
        } else if (value === 'recreate-pin') {
            // TODO recreate popup
        } else if (value === 'view-pin') {
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
                        handleSelection={handleMangePINSelection}
                    />
                </div>
                <div className={`${Styles.buttonItem}`}>
                    <Button
                        variant="secondary"
                        isDarkBackground={false}
                        disabled={false}
                        aria-disabled={false}
                        handleOnClick={() => setOpenViewPINHistoryModal(true)}
                    >
                        {Content.propertyDetails.viewPINHistory}
                    </Button>
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
                    expirationReason={expirationReason}
                    expiredByName={expiredByName}
                    expiredByUsername={expiredByUsername}
                />
                {openViewPINHistoryModal && (
                    <ViewPINHistoryModal
                        isOpen={openViewPINHistoryModal}
                        setIsOpen={setOpenViewPINHistoryModal}
                        livePinId={livePinId}
                    />
                )}
            </div>
        </div>
    )
}

export default PropertyOwner

PropertyOwner.protoTypes = {
    fullName: PropTypes.string,
    mailingAddress: PropTypes.string,
}
