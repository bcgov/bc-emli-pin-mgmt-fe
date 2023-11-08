import PropertySearchHeader from '../PropertySearchHeader/PropertySearchHeader'
import PropertySearch from '../PropertySearch/PropertySearch'
import PropertyDetails from '../PropertyDetails/PropertyDetails'
import SearchResults from '../../Search Results/SearchResults'
import PropertyResultIcon from '../../../assets/svgs/PropertyResultIcon'
import PropertyNoResultIcon from '../../../assets/svgs/PropertyNoResultIcon'
import Styles from './PropertyLayout.module.css'
import Content from '../../../assets/content/content.json'
import Router from 'next/router'

import { useState, useEffect } from 'react'
import BackArrow from '../../../assets/svgs/BackArrow'

export default function PropertyLayout(
    role
) {
    const [searchString, setSearchString] = useState()
    const [showPropertySearchHeader, setShowPropertySearchHeader] = useState(true)
    const [propertySiteId, setPropertySiteId] = useState('')
    const [propertyAddress, setPropertyAddress] = useState('')
    const [searchResultLength, setSearchResultLength] = useState(0)

    useEffect(() => {
        console.log('useeffect')
        let storedSearchString = sessionStorage.getItem("searchString")
        let storedAutocompleteSearchString = sessionStorage.getItem("autocompleteSearchString")
        let storedSiteId = sessionStorage.getItem("siteId")
        let storedPropertyAddress = sessionStorage.getItem("propertyAddress")

        if (storedAutocompleteSearchString) {
            setShowPropertySearchHeader(false)
            setSearchString(storedAutocompleteSearchString)
            document.getElementById('searchInput').value = storedAutocompleteSearchString
        } else if (storedSearchString) {
            setShowPropertySearchHeader(false)
            setSearchString(storedSearchString)
            document.getElementById('searchInput').value = storedSearchString
        }
        
        if (storedSiteId && storedPropertyAddress) {
            setPropertySiteId(storedSiteId)
            setPropertyAddress(storedPropertyAddress)
        }
    }, [])

    function getSearchString (newSearchString) {
        setSearchString(newSearchString)
        setShowPropertySearchHeader(false)
    }

    function getSiteId (siteId, propertyAddress) {
        console.log('infunctions')
        setPropertySiteId(siteId)
        setPropertyAddress(propertyAddress)
    }

    function getSelectedValues (siteId, propertyAddress){
        console.log('infunctions')
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

    const noPropertyDetailMsg = (
        <div className={`${Styles.propertyDetailsWrap}` + " flex items-center justify-center content-center flex-col"}>
            <PropertyNoResultIcon />
            <div className={`${Styles.noResultMsgWrap}`}>
            {Content.propertyDetails.noSearchResultMsg}
            </div>
        </div>
      )

    function getSearchResultsLength (searchResultLength) {
        console.log('infunctions')
        setSearchResultLength(searchResultLength)
        setPropertySiteId('')
    }

    function backToSearchPage() {
        setShowPropertySearchHeader(true)
        setSearchString('')
        sessionStorage.setItem("searchString", '')
        sessionStorage.setItem("autocompleteSearchString", '')
		Router.push('/home')
    }

    console.log(propertyAddress, propertySiteId)
    
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
                <PropertySearch 
                    getSearchString={getSearchString} 
                    getSiteId={getSiteId} 
                />
            </div>
            {searchString && (
                <div className={`${Styles.propertyResultWrap}` + ' flex justify-center content-center'}>
                    <button className={`${Styles.backButton}` + " " + ' flex justify-center content-center'} onClick={() => backToSearchPage()}>
                        <BackArrow />
                        <span>{Content.propertyLayout.backButton}</span>
                    </button>
                    <div className={`${Styles.searchResultWrap}`}>
                        <SearchResults
                            searchAddress={searchString}
                            handleClick={getSelectedValues}
                            // handleCallback={getSearchResultsLength}
                        />
                    </div>

                    <div>
                        { propertySiteId === ''  && searchResultLength > 0 && propertyDetailMsg}
                        { propertySiteId === '' && searchResultLength <= 0 && noPropertyDetailMsg}
                        {
                            propertySiteId !== '' &&
                            <PropertyDetails 
                                propertySiteId={propertySiteId} 
                                propertyAddress={propertyAddress}
                                role={role}
                            />
                        }
                    </div>
                </div>
            )}
        </>
    )
}
