import styles from './SearchResults.module.css'
import AddressCard from '../Address Card/index'
import LoadingIcon from '../../assets/svgs/LoadingIcon'
import LoadingScreen from '../LoadingScreen'
import Content from '../../content.json'
import { useState } from 'react'

export default function SearchResults({ results, isLoading, handleClick }) {
    const [selected, setSelected] = useState(null)

    function getProperty(property) {
        setSelected(property.siteID)
        handleClick(property.siteID)
    }

    if (!results) {
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
                    {results?.length}
                    {Content.searchResults.addressesFound}
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
