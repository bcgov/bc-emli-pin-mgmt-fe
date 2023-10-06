import PropertySearchHeader from '../PropertySearchHeader/PropertySearchHeader'
import PropertySearch from '../PropertySearch/PropertySearch'
import PropertyDetails from '../PropertyDetails/PropertyDetails'
import SearchResults from '../../Search Results/SearchResults'
import PropertyResultIcon from '../../../assets/svgs/PropertyResultIcon'
import Styles from './PropertyLayout.module.css'
import Content from '../../../assets/content/content.json'

import { useState } from 'react'

export default function PropertyLayout() {
    const [searchString, setSearchString] = useState('')
    const [showPropertySearchHeader, setShowPropertySearchHeader] =
        useState(true)

    const [propertySiteId, setPropertySiteId] = useState('')
    const [propertyAddress, setPropertyAddress] = useState('')

    function getSearchString (newSearchString) {
        setSearchString(newSearchString)
        setShowPropertySearchHeader(false)
    }

    function getSelectedValues (siteId, propertyAddress){
        setPropertySiteId(siteId)
        setPropertyAddress(propertyAddress)
    }

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
                            handleClick={getSelectedValues}
                        />
                    </div>
                    <div>
                      { propertySiteId === '' && propertyDetailMsg }

                      { 
                        propertySiteId !== '' && 
                        <PropertyDetails 
                            propertySiteId={propertySiteId} 
                            propertyAddress={propertyAddress}/>
                        }
                    </div>
                </div>
            )}
        </>
    )
}
