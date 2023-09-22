import Styles from './PropertySearch.module.css'
import Content from '../../../content.json'
import { Button } from '../../Button/index'
import { useState } from 'react'

export default function PropertySearch  ({getSearchString})
{
	const [searchString, setSearchString] = useState('')
	const [showSearchError, setShowSearchError] = useState(false)

	// Validate 3 chararater as minimum limit
	const handleSearchString = (searchText) => {
		setSearchString(searchText);
  }

	// Show the error msg as long as click on the input field
	const handleOnFocus = () => {
		setShowSearchError(true)
	}

	let address = searchString?.toLowerCase()

	const handleSearch = () => {
		getSearchString(address)
	}


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

