import PropTypes from 'prop-types'

import styles from './SearchResults.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import AddressCard from '../Address Card/index'
import Endpoints from '../../apiManager/endpoints'
import HttpRequest from '../../apiManager/httpRequestHandler/index'

export default function SearchResults({ searchString }) {
    const [results, setResults] = useState()

    let address = searchString?.toLowerCase()

    // useEffect(() => {
    //     axios
    //         .get(`${Endpoints.propertySearch.GET_SEARCH_RESULTS}${address}`, {
    //             mode: 'cors',
    //             withCredentials: false,
    //         })
    //         .then((response) => {
    //             setResults(response?.data?.results)
    //         })
    //         .catch((error) => {
    //             console.error(error)
    //         })
    // }, [])

    useEffect(() => {
        HttpRequest.getSearchResults(address)
            .then((response) => {
                setResults(response?.data?.results)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    if (!results) {
        return (
            <div>
                <h1
                    data-testid="searchResultTitle"
                    className={`${styles.searchResultTitle}`}
                >
                    0 addresses found.
                </h1>
            </div>
        )
    } else if (results) {
        return (
            <div>
                <h1
                    data-testid="searchResultTitle"
                    className={`${styles.searchResultTitle}`}
                >
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
                        results?.length > 8
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
