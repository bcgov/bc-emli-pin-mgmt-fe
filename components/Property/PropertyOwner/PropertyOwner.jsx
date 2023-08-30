import PropTypes from 'prop-types'
import Image from 'next/image'
import Styles from './PropertyOwner.module.css'
import Content from '../../../content.json'
import { Button } from '../../Button/index'
import { useState, useEffect } from 'react'
import Endpoints from '../../../apiManager/endpoints'
import axios from 'axios'
import ManagePINDropdown from '../ManagePINDropdown/index'
import ViewPINHistory from '../ViewPINHistory/ViewPINHistory'
import Modal from '../../Modal'
import HttpRequest from '../../../apiManager/httpRequestHandler'

function PropertyOwner({ fullName, mailingAddress, livePinId }) {
    const [openPINHistoryModal, setOpenPINHistoryModal] = useState(false)
    const [pinHistory, setPinHistory] = useState(null)

    function getPINHistory() {
        HttpRequest.getPINHistory(livePinId)
            .then((response) => {
                console.log(response.data.logs)
                setPinHistory(response.data.logs)
                console.log('getting pin history')
                setOpenPINHistoryModal(true)
            })
            .catch((error) => {})
    }

    return (
        <div className={`${Styles.ownerInfoCardWrap}` + ' text-left'}>
            <div className={`${Styles.title}`}>
                {Content.propertyDetails.owner}
            </div>
            <div className="flex justify-items-start">
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
                    <ManagePINDropdown />
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
                    modalHeader="View PIN History"
                    modalId="pin-history-modal"
                    isOpen={openPINHistoryModal}
                    setIsOpen={setOpenPINHistoryModal}
                    modalMainBtn={{
                        text: `Close`,
                        size: 'medium',
                        variant: 'primary',
                        onClickHandler: () => setOpenPINHistoryModal(false),
                    }}
                >
                    <ViewPINHistory
                        pinHistory={pinHistory}
                        // pinHistory={[
                        //     {
                        //         expiredByName: 'Test Test',
                        //         expiredByUsername: 'testtest',
                        //         updatedAt: 'Jan 1',
                        //         action: 'Test Action',
                        //         updatedAt: 'Test Type',
                        //         sentToPhone: '41612131234',
                        //         sentToEmail: 'Test@test.ca',
                        //     },
                        // ]}
                    />
                </Modal>
            </div>
        </div>
    )
}

export default PropertyOwner

PropertyOwner.protoTypes = {
    fullName: PropTypes.string,
    mailingAddress: PropTypes.string,
}
