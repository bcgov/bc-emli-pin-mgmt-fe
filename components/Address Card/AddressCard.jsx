import PropTypes from 'prop-types'

import styles from './AddressCard.module.css'
import LocationDot from '../../assets/svgs/LocationDot'

export default function AddressCard({ address, city, siteId, handleClick }) {
    return (
        // On click call api to use siteId to get property details
        <button type="button" id={`${siteId}`} onClick={handleClick}>
            <div className={`${styles.addressCard}`}>
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
