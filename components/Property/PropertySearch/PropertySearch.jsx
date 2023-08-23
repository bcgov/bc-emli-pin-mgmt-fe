import PropTypes from 'prop-types'
import Image from 'next/image'
import Styles from './PropertySearch.module.css'
import Content from '../../../content.json'
import { Button } from '../../Button/index'
import { useState, useEffect } from 'react'
import Endpoints from '../../../apiManager/endpoints'
import axios from 'axios'

function PropertySearch  ({
})  {
	const [searchString, setSearchString] = useState('')
	const [showSearchError, setShowSeachError] = useState(false)
	const [results, setResults] = useState(null)

	// Validate 3 chararater as minimum limit
	const handleSearchString = (searchText) => {
		setSearchString(searchText);
	  }

	// Show the error msg as long as click on the input field
	const handleOnFocus = () => {
		setShowSeachError(true)
	}

	let address = searchString?.toLowerCase()
	
	// Call the API to get the search result
	const handleSearch = () => {
		axios
		.get(`${Endpoints.propertySearch.GET_SEARCH_RESULTS}${address}`, {
			mode: 'cors',
		})
		.then((response) => {
			setResults(response?.data?.results)
		})
		.catch((error) => {
			console.error(error)
		})
	}

	console.log(results);

    // useEffect(() => {
    //     axios
    //         .get(`${Endpoints.propertySearch.GET_SEARCH_RESULTS}${address}`, {
    //             mode: 'cors',
    //         })
    //         .then((response) => {
    //             setResults(response?.data?.results)
    //         })
    //         .catch((error) => {
    //             console.error(error)
    //         })
    // }, [])

	return (
		<div className={`${Styles.searchWrap}` + " flex items-start justify-center"}>
			<div className={`${Styles.searchContentWrap}` + " flex items-start justify-center"}>
				<div className='text-left'>
					<div>
						<input 
							placeholder={Content.home.searchPlaceHolder} 
							onChange={(e) => handleSearchString(e.target.value)} 
							onFocus={handleOnFocus} />
					</div>
					{
						showSearchError && 
						<div id="error" className={`${Styles.error}`}>
							<span>{Content.propertySearch.searchBoxError}</span>
						</div>
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


export default PropertySearch;
