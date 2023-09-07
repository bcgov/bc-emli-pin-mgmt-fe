import PropertySearchHeader from './PropertySearchHeader/PropertySearchHeader'
import PropertySearch from './PropertySearch/PropertySearch'
import PropertyDetails from './PropertyDetails/PropertyDetails'
import SearchResults from '../Search Results/SearchResults'
import { useEffect, useState } from 'react'

export default function Property() {
    const [searchString, setSearchString] = useState('')

    const getSearchString = (newSearchString) => {
        setSearchString(newSearchString)
    }

    return (
        <>
            <PropertySearchHeader />
            <div className="homePropertySearchWrap">
                <PropertySearch getSearchString={getSearchString} />
            </div>
            <div className="flex">
                <div>
                    {/* <SearchResults searchString={searchString}/> */}
                    <SearchResults searchString={searchString} />
                </div>
                <div>
                    <PropertyDetails />
                </div>
            </div>
        </>
    )
}
