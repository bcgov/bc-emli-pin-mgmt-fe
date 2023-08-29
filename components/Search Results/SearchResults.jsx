import styles from './SearchResults.module.css'
import AddressCard from '../Address Card/index'
import LoadingIcon from '../../assets/svgs/LoadingIcon'
import LoadingScreen from '../LoadingScreen'
import Content from '../../content.json'

export default function SearchResults({ results, isLoading, handleClick }) {
    function getProperty(property){
        handleClick(property.siteID)
    }
    if (!results || isLoading) {
        return (
            <div>
                <h1
                    data-testid="searchResultTitle"
                    className={`${styles.searchResultTitle}`}
                >
                    0 addresses found.
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
                    {results?.length}{Content.searchResults.addressesFound}
                </h1>
                <div className={`${styles.searchResultList}`}>
                    {results?.map((result) => (
                        <div 
                            onClick={ () => getProperty(result)}
                            key={result.siteID}>
                            <AddressCard
                                address={result.fullAddress.split(', ')[0]}
                                city={result.fullAddress.split(', ')[1]}
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
