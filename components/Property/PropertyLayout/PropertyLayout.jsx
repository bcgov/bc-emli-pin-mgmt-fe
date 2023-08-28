import PropertySearchHeader from '../PropertySearchHeader/PropertySearchHeader'
import PropertySearch from '../PropertySearch/PropertySearch'
import PropertyDetails from '../PropertyDetails/PropertyDetails'
import SearchResults from '../../Search Results/SearchResults'
import Styles from './PropertyLayout.module.css'
import { useEffect, useState } from 'react'
import Endpoints from '../../../apiManager/endpoints'
import HttpRequest from '../../../apiManager/httpRequestHandler/index'

export default function PropertyLayout() {
    const [searchString, setSearchString] = useState('')
    const [showPropertySearchHeaher, setShowPropertySearchHeader] = useState(true)
    const [results, setResults] = useState(null)

    const getSearchString = (newSearchString) => {
        setSearchString(newSearchString)
        getSearchResults(newSearchString)
        togglePropertySearch()
    }

    function getSearchResults(searchAddressString){
        // console.log(searchAddressString)
        let address = searchAddressString?.toLowerCase()
        HttpRequest.getSearchResults(address)
            .then((response) => {
                setResults(response?.data?.results)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    function togglePropertySearch(){
        setShowPropertySearchHeader(false)
    }

    return (
        <>
            <div style={{display: showPropertySearchHeaher ? "block" : "none"}}>
                <PropertySearchHeader />
            </div>
            <div className="homePropertySearchWrap">
                <PropertySearch getSearchString={getSearchString} />
            </div>
            {
                searchString &&
                <div className={`${Styles.propertyResultWrap}` + " flex"}>
                    <div className={`${Styles.seachResultWrap}`}>
                        <SearchResults results={results} />
                    </div>
                    <div>
                        <PropertyDetails searchResultLayout={true}/>
                    </div>
                </div>
            }
            
        </>
    )
}
