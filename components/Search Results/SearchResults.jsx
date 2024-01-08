import { useEffect, useState } from 'react'
import styles from './SearchResults.module.css'
import AddressCard from '../Address Card/index'
import LoadingIcon from '../../assets/svgs/LoadingIcon'
import LoadingScreen from '../LoadingScreen'
import Content from '../../assets/content/content.json'
import HttpRequest from '../../apiManager/httpRequestHandler'

export default function SearchResults(props) {
    const { searchAddress, handleClick, handleCallback } = props
    const [isLoading, setLoading] = useState(true)
    const [results, setResults] = useState(null)
    const [selected, setSelected] = useState(null)

    useEffect(() => {
      getSearchResults(searchAddress, handleCallback)
    }, [searchAddress]);

    function getSearchResults(searchAddressString, handleCallback) {
      setLoading(true)
      let address = searchAddressString?.toLowerCase()
      HttpRequest.getSearchResults(address)
          .then((response) => {
              setResults(response?.data?.results)
              if (handleCallback) {
                handleCallback(response?.data?.results.length)
              }
              setLoading(false)
          })
          .catch((error) => {
              setResults(null)
              if (handleCallback) { 
                handleCallback(0)
              }
              console.error(error)
              setLoading(false)
          })
  }
    function getProperty(property) {
        setSelected(property.siteID)
        handleClick(property.siteID, property.fullAddress)
    }

    if (!results || isLoading) {
        return (
            <div>
                <h1
                    data-testid="searchResultTitle"
                    className={`${styles.searchResultTitle}`}
                >
                    {Content.searchResults.noAddressFound}
                </h1>
                <div>
                    {isLoading && (
                        <LoadingScreen
                            loadingText=""
                            loaderIcon={<LoadingIcon />}
                        />
                    )}
                </div>
            </div>
        )
    } else if (results && !isLoading) {
        return (
            <div>
                <h1
                    data-testid="searchResultTitle"
                    className={`${styles.searchResultTitle}`}
                >
                    {Content.searchResults.addressesFound}
                    {results?.length}
                </h1>
                <div className={`${styles.searchResultList}`}>
                    {results?.map((result, i) => (
                        <div onClick={() => getProperty(result)} key={i}>
                            <AddressCard
                                address={result.fullAddress.split(', ')[0]}
                                city={result.fullAddress.split(', ')[1]}
                                siteId={result.siteID}
                                selected={selected}
                            />
                        </div>
                    ))}
                </div>

                <div
                    className={`${
                        results?.length > 8
                            ? styles.scrollMsg
                            : styles.hiddenScrollMsg
                    }`}
                >
                    {Content.searchResults.scrollMessage}
                </div>
            </div>
        )
    }
}
