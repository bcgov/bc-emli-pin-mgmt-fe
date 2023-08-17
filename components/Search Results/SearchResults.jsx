import PropTypes from 'prop-types'

import styles from './SearchResults.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import AddressCard from '../Address Card/index'

export default function SearchResults({ searchString }) {
    const [results, setResults] = useState(null)

    let address = searchString?.toLowerCase()

    useEffect(() => {
        axios
            .get(`http://localhost:3000/properties/address/` + address, {
                mode: 'cors',
            })
            .then((response) => {
                setResults(response.data.results)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    if (results) {
        return (
            <div>
                <h1 className={`${styles.searchResultTitle}`}>
                    {results?.length} addresses found.
                </h1>
                <div className={`${styles.searchResultList}`}>
                    {results?.map((result) => (
                        <AddressCard
                            key={result.siteID}
                            address={result.fullAddress.split(', ')[0]}
                            city={result.fullAddress.split(', ')[1]}
                        />
                    ))}
                </div>
                <div
                    className={`${
                        results?.length > 7
                            ? styles.scrollMsg
                            : styles.hiddenScrollMsg
                    }`}
                >
                    Scroll down to view more results
                </div>
            </div>
        )
    }
}

SearchResults.propTypes = {
    searchString: PropTypes.string,
}
