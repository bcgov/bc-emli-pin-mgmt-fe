import Styles from './Autocomplete.module.css'
import { useEffect, useState } from 'react'
import HttpRequest from '../../../../apiManager/httpRequestHandler'
import { Button } from '../../../Button'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { customSnowplowCall } from '../../../../public/snowplow'

export default function Autocomplete({
    searchString,
    getSiteId,
    getSearchString,
    getAddress,
    showResults,
    userName
}) {
    const [results, setResults] = useState(null)

    useEffect(() => {
        if (searchString.length > 3) {
            getSearchResults(searchString)
        }
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
        getSearchString(address)
        getAddress(address)
        document.getElementById('searchInput').value = address
        sessionStorage.setItem("autocompleteSearchString", address)
        customSnowplowCall(
			'autocomplete_click',
			userName,
			address,
			'',
			'',
			'',
			'',
			''
		)
    }

    const { pathname } = useRouter()

    return (
        <>
            {results && showResults && (
                <div id="autocompleteResults" className={`${Styles.autocompleteResults}` + " " + `${
                    pathname == '/property-search' ? Styles.propertySearch : Styles.homeSearch
                }`}>
                    {results?.slice(0, 5).map((result, i) => (
                        <div className={`${Styles.autocompleteResult}`} key={i}>
                                <Button
                                    onMouseDownCapture={() =>
                                        handleClick(
                                            result.siteID,
                                            result.fullAddress
                                        )
                                    }
                                    buttonId="autocomplete-result"
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
    livePinId: PropTypes.string,
    expiredByUsername: PropTypes.string,
    searchString: PropTypes.string.isRequired,
    getSiteId: PropTypes.func.isRequired,
    getSearchString: PropTypes.func.isRequired,
    showResults: PropTypes.bool.isRequired,
}
