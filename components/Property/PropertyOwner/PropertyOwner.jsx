import PropTypes from 'prop-types'
import Image from 'next/image'
import Styles from './PropertyOwner.module.css'
import Content from '../../../content.json'
import { Button } from '../../Button/index'
import { useState, useEffect } from 'react'
import Endpoints from '../../../apiManager/endpoints'
import axios from 'axios'
import ViewPINHistory from '../ViewPINHistory/ViewPINHistory'
import Modal from '../../Modal'
import HttpRequest from '../../../apiManager/httpRequestHandler'

function PropertyOwner({ livePinId }) {
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
        <div
            className={
                `${Styles.searchWrap}` + ' flex items-start justify-center'
            }
        >
            Property Owner
            <Button handleOnClick={() => getPINHistory()} />
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
    )
}

export default PropertyOwner
