import PropTypes from 'prop-types'
import Image from 'next/image'
import Styles from './PropertySearch.module.css'
import Content from '../../../content.json'
import { Button } from '../../Button/index'
import { useState } from 'react'

function PropertySearch  ({
})  {
	const [searchString, setSearchString] = useState('');
	const [showSearchError, setShowSeachError] = useState(false) 

	// Validate 3 chararater as minimum limit
	const handleSearchString = (searchText) => {
		setSearchString(searchText);
	  }

	// Show the error msg as long as click on the input field
	const handleOnFocus = () => {
		setShowSeachError(true)
	}

	// Call the API to get the search result
	const handleSearch = () => {

	}

	return (
		<div className={`${Styles.searchWrap}` + " flex items-start justify-center"}>
			<div className={`${Styles.searchContentWrap}` + " flex items-start justify-center"}>
				<div className='text-left'>
					<div>
						<input 
						placeholder={Content.home.searchPlaceHolder} 
						onChange={(e) => handleSearchString(e.target.value)} 
						onFocus={handleOnFocus}></input>
					</div>
					{
						showSearchError && <div id="error" className={`${Styles.error}`}>
										   		<span>{Content.propertySearch.searchBoxError}</span>
											</div>
					}
				</div>
				<div className={`${Styles.searchButtonWrap}`}>
					<Button 
					variant="primary" 
					size="medium" isDarkBackground={true} disabled={searchString.length < 4} 
					handleOnClick={handleSearch} aria-disabled={searchString.length < 4} >
						{Content.home.search}
					</Button>
				</div>
			</div>
		</div>
	)
}


export default PropertySearch;
