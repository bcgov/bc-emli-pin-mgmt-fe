import Styles from './PropertySearch.module.css'
import Content from '../../../assets/content/content.json'
import { Button } from '../../Button/index'
import { useState } from 'react'
import SearchIcon from '../../../assets/svgs/SearchIcon'
import CloseIcon from '../../../assets/svgs/CloseIcon'
import Autocomplete from './Autocomplete/Autocomplete'
import Router from 'next/router'

export default function PropertySearch({ getSearchString, getSiteId }) 
{
    const [searchString, setSearchString] = useState('')
    const [showSearchError, setShowSearchError] = useState(false)
	const [showResults, setShowResults] = useState(true)

	const updateAutocompleteDisplay = (display) => {
		if (typeof document !== 'undefined') {
			const autocompleteResults = document.getElementById('autocompleteResults');
			if(autocompleteResults) autocompleteResults.style.display = display;
		}
	}

    // Validate 3 chararater as minimum limit
    const handleSearchString = (searchText) => {
		updateAutocompleteDisplay('block')
        searchText.length < 3
            ? setShowSearchError(true)
            : setShowSearchError(false)
        setSearchString(searchText)
    }

    // Show the error msg as long as click on the input field
    const handleOnFocus = (searchText) => {
		updateAutocompleteDisplay('block')
        searchText.length < 3
            ? setShowSearchError(true)
            : setShowSearchError(false)
		
		setShowResults(true)
    }

    let address = searchString?.toLowerCase()

    const handleSearch = () => {
		setShowResults(false)
        getSearchString(address)
		sessionStorage.setItem("searchString", searchString)
		Router.push('/property-search')
    }

    const clearSearch = () => {
        document.getElementById('searchInput').value = ''
        setShowSearchError(true)
        setSearchString('')
    }

	const getAddress = (address) => {
		getSearchString(address)
	}

	return (
		<div className={`${Styles.searchWrap}` + " flex items-start justify-center"}>
			<div className={`${Styles.searchContentWrap}` + " flex items-start justify-center"}>
				<div className='text-left'>
					<div>
						<input
							id="searchInput"
							placeholder={Content.home.searchPlaceHolder}
							onChange={(e) => handleSearchString(e.target.value)}
							onFocus={handleOnFocus} 
							onBlur={() => updateAutocompleteDisplay('none')}
							autoComplete="off"/>

						{searchString.length < 3 && (
                            <span className={`${Styles.searchIcon}`}>
                                <SearchIcon />
                            </span>
                        )}

                        {searchString.length >= 3 && (
                            <span className={`${Styles.searchIcon}`}>
                                <button
                                    className={`${Styles.closeButton}`}
                                    onClick={() => clearSearch()}
                                >
                                    <CloseIcon />
                                </button>
                            </span>
                        )}
					</div>
					{
						showSearchError &&
						<div id="error" className={`${Styles.error}`}>
							<span>{Content.propertySearch.searchBoxError}</span>
						</div>
					}
					{
						!showSearchError && 
						<>
							<div className={`${Styles.errorPlaceholder}`}></div>
							<Autocomplete 
								searchString={searchString} 
								getSiteId={getSiteId}
								getSearchString={handleSearch}
								showResults={showResults}
								getAddress={getAddress}
							/>
						</>
					}
				</div>
				<div className={`${Styles.searchButtonWrap}`}>
					<Button
						variant="primary"
						size="medium" 
						isDarkBackground={true}
						disabled={searchString.length < 3}
						aria-disabled={searchString.length < 3}
						handleOnClick={handleSearch} >
						{Content.home.search}
					</Button>
				</div>
			</div>
		</div>
	)
}
