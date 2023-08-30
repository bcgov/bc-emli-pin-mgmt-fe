import PropertySearchHeader from '../PropertySearchHeader/PropertySearchHeader'
import PropertySearch from '../PropertySearch/PropertySearch'
import PropertyDetails from '../PropertyDetails/PropertyDetails'
import SearchResults from '../../Search Results/SearchResults'
import Styles from './PropertyLayout.module.css'
import { useEffect, useState } from 'react'
import HttpRequest from '../../../apiManager/httpRequestHandler/index'

export default function PropertyLayout() {
    const [searchString, setSearchString] = useState('')
    const [showPropertySearchHeaher, setShowPropertySearchHeader] =
        useState(true)
    const [isLoading, setLoading] = useState(true)
    const [results, setResults] = useState(null)
    const [currentProperty, setProperty] = useState(null)
    const [showPropertyDetail, setShowPropertyDetail] = useState(false)

    const getSearchString = (newSearchString) => {
        setSearchString(newSearchString)
        getSearchResults(newSearchString)
        togglePropertySearch()
    }

    function getSearchResults(searchAddressString) {
        setLoading(true)
        let address = searchAddressString?.toLowerCase()
        HttpRequest.getSearchResults(address)
            .then((response) => {
                setResults(response?.data?.results)
                setLoading(false)
            })
            .catch((error) => {
                console.error(error)
                setLoading(false)
            })
    }

    function togglePropertySearch() {
        setShowPropertySearchHeader(false)
    }

    function handleSearchResultClick(siteID) {
        getPropertyDetail(siteID)
        setShowPropertyDetail(currentProperty == null ? false : true)
    }

    function getPropertyDetail(siteID) {
        setLoading(true)
        // TODO: the role will be retrieved in BE
        // TO BE REMOVED
        const role = 'SuperAdmin'

        HttpRequest.getPropertyDetail(siteID, role)
            .then((response) => {
                console.log(response)
                setShowPropertyDetail(response?.data)
                setLoading(false)
            })
            .catch((error) => {
                console.error(error)
                setLoading(false)
            })
        console.log(currentProperty)
    }

    return (
        <>
            <div
                style={{
                    display: showPropertySearchHeaher ? 'block' : 'none',
                }}
            >
                <PropertySearchHeader />
            </div>
            <div className="homePropertySearchWrap">
                <PropertySearch getSearchString={getSearchString} />
            </div>
            {searchString && (
                <div
                    className={
                        `${Styles.propertyResultWrap}` +
                        ' flex justify-center content-center'
                    }
                >
                    <div className={`${Styles.seachResultWrap}`}>
                        <SearchResults
                            results={results}
                            isLoading={isLoading}
                            handleClick={handleSearchResultClick}
                        />
                    </div>
                    <div>
                        <PropertyDetails
                            displayDetails={showPropertyDetail}
                            resultCount={results?.length}
                        />
                    </div>
                </div>
            )}
        </>
    )
}
