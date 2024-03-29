import PropTypes from 'prop-types'
import styles from './AddressCard.module.css'
import LocationDot from '../../assets/svgs/LocationDot'
import { useEffect } from 'react'
import { customSnowplowCall } from '../../public/snowplow'

export default function AddressCard({ address, city, siteId, selected, userName }) {

    useEffect(() => {
		const searchResult = document.getElementById(siteId)
        searchResult.addEventListener('click', function() {
            customSnowplowCall(
                'property_click',
                userName,
                '',
                `${address}, ${city}`,
                '',
                '',
                '',
                ''
            )
        })
    }, [])

    return (
        // On click call api to use siteId to get property details
        <button type="button" id={`${siteId}`}>
            <div
                className={`${styles.addressCard} 
                ${selected === siteId ? styles.selectedColour : ''}`}
            >
                <div className={`${styles.icon}`}>
                    <LocationDot />
                </div>
                <div className={`${styles.text}`}>
                    <div className={`${styles.address}`}>{address}</div>
                    <div className={`${styles.city}`}>{city}</div>
                </div>
            </div>
        </button>
    )
}

AddressCard.propTypes = {
    address: PropTypes.string,
    city: PropTypes.string,
    siteId: PropTypes.string,
    handleClick: PropTypes.func,
}
