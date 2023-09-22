import PropertySearchHeader from '../PropertySearchHeader/PropertySearchHeader'
import PropertySearch from '../PropertySearch/PropertySearch'
import PropertyDetails from '../PropertyDetails/PropertyDetails'
import SearchResults from '../../Search Results/SearchResults'
import PropertyResultIcon from '../../../assets/svgs/PropertyResultIcon'
import Styles from './PropertyLayout.module.css'
import Content from '../../../content.json'

import { useState } from 'react'

export default function PropertyLayout() {
    const [searchString, setSearchString] = useState('')
    const [showPropertySearchHeader, setShowPropertySearchHeader] =
        useState(true)

    const [propertySiteId, setPropertySiteId] = useState('')

    function getSearchString (newSearchString) {
        setSearchString(newSearchString)
        setShowPropertySearchHeader(false)
    }

    /* function handleSearchResultClick(siteID) {
        const siteIDTest = '06996c2e-cf0f-4bb8-812a-4597e680818c'
        setPropertySiteId(siteIDTest);
    } */

    const propertyDetailMsg = (
      <div className={`${Styles.propertyDetailsWrap}` + " flex items-center justify-center content-center flex-col"}>
				<PropertyResultIcon />
				<div className={`${Styles.resultMsgWrap}`}>
					{Content.propertyDetails.searchResultMsg}
				</div>
			</div>
    )

    return (
        <>
            <div
                style={{
                    display: showPropertySearchHeader ? 'block' : 'none',
                }}
            >
                <PropertySearchHeader />
            </div>
            <div className="homePropertySearchWrap">
                <PropertySearch getSearchString={getSearchString} />
            </div>
            {searchString && (
                <div className={`${Styles.propertyResultWrap}` + ' flex justify-center content-center'}>
                    <div className={`${Styles.searchResultWrap}`}>
                        <SearchResults
                            searchAddress={searchString}
                            handleClick={setPropertySiteId}
                        />
                    </div>
                    <div>
                      { propertySiteId === '' && propertyDetailMsg }

                      {propertySiteId !== '' && <PropertyDetails propertySiteId={propertySiteId} />}
                    </div>
                </div>
            )}
        </>
    )
}
