import Styles from './Autocomplete.module.css'
import { useEffect, useState } from 'react'
import HttpRequest from '../../../../apiManager/httpRequestHandler'
import { Button } from '../../../Button'
import PropTypes from 'prop-types'

export default function Autocomplete({
    searchString,
    getSiteId,
    getSearchString,
    showResults,
}) {
    const [results, setResults] = useState(null)

    useEffect(() => {
        getSearchResults(searchString)
    }, [searchString])

    function getSearchResults(searchAddressString) {
        let address = searchAddressString?.toLowerCase()
        HttpRequest.getSearchResults(address)
            .then((response) => {
                setResults(response?.data?.results)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    const handleClick = (siteId, address) => {
        getSiteId(siteId, address)
        getSearchString(searchString)
        document.getElementById('searchInput').value = address
    }

    return (
        <>
            {results && showResults && (
                <div className={`${Styles.autocompleteResults}`}>
                    {results?.slice(0, 5).map((result, i) => (
                        <div className={`${Styles.autocompleteResult}`} key={i}>
                                <Button
                                    handleOnClick={() =>
                                        handleClick(
                                            result.siteID,
                                            result.fullAddress
                                        )
                                    }
                                >
                                    {result.fullAddress}
                                </Button>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

Autocomplete.propTypes = {
    livePinId: PropTypes.string.isRequired,
    expiredByUsername: PropTypes.string,
    searchString: PropTypes.string.isRequired,
    getSiteId: PropTypes.func.isRequired,
    getSearchString: PropTypes.func.isRequired,
    showResults: PropTypes.func.isRequired,
}
