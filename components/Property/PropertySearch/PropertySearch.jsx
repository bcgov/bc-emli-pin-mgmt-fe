import PropTypes from 'prop-types'
import Image from 'next/image'
import Styles from './PropertySearch.module.css'
import Content from '../../../content.json'
import { Button } from '../../Button/index'
import { useState } from 'react'

function PropertySearch  ({
})  {
	// const [state, useState] = useState(false)
	const isSearchButtonDisabled = false
	const showSearchError = false
	return (
		<div className={`${Styles.searchWrap}` + " flex items-start justify-center"}>
			<div className={`${Styles.searchContentWrap}` + " flex items-start justify-center"}>
				<div className='text-left'>
					<div>
						<input placeholder={Content.home.searchPlaceHolder} 
						onChange={onChange} onFocus={onFocus}></input>
					</div>
					{
						showSearchError && <div id="error" className={`${Styles.error}`}>
										   		<span>{Content.propertySearch.searchBoxError}</span>
											</div>
					}
					
				</div>
				<div className={`${Styles.searchButtonWrap}`}>
					<Button variant="primary" size="medium" isDarkBackground={true} disabled={isSearchButtonDisabled} 
					handleOnClick={search}>
						{Content.home.search}
					</Button>
				</div>
			</div>
		</div>
	)
}


export default PropertySearch;


function onChange(e) {
	e.target.value.length > 3 ? isSearchButtonDisabled = false: isSearchButtonDisabled = false
	// console.log(e.target.value.length, isSearchButtonDisabled)
    // this.useState({ value: e.target.value });
}

function onFocus(){
	// console.log(showSearchError)
	// showSearchError = true
}

function search(e){
	const val = e.target.value; 
	console.log(val)	
}



// $("#searchInput").onFocus