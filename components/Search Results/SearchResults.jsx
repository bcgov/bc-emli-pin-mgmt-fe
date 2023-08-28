import styles from './SearchResults.module.css'
import AddressCard from '../Address Card/index'
import LoadingIcon from '../../assets/svgs/LoadingIcon'
import LoadingScreen from '../LoadingScreen'

export default function SearchResults({ results, isLoading }) {
    if (!results) {
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
