import Styles from './PropertyDetails.module.css'
import Content from '../../../content.json'
import { Button } from '../../Button/index'
import { useState, useEffect } from 'react'
import Endpoints from '../../../apiManager/endpoints'
import axios from 'axios'
import PropertyIconSmall from '../../../assets/svgs/PropertyIconSmall'
import GroupUserIcon from '../../../assets/svgs/GroupUserIcon'
import PropertyOwner from '../PropertyOwner/PropertyOwner'

function PropertyDetails  ({
})  {
	// const [searchString, setSearchString] = useState('')
	// const [showSearchError, setShowSeachError] = useState(false)
	// const [results, setResults] = useState(null)

	// // Validate 3 chararater as minimum limit
	// const handleSearchString = (searchText) => {
	// 	setSearchString(searchText);
	//   }

	// // Show the error msg as long as click on the input field
	// const handleOnFocus = () => {
	// 	setShowSeachError(true)
	// }

	// let address = searchString?.toLowerCase()
	
	// // Call the API to get the search result
	// const handleSearch = () => {
	// 	axios
	// 	.get(`${Endpoints.propertySearch.GET_SEARCH_RESULTS}${address}`, {
	// 		mode: 'cors',
	// 		withCredentials: false,
	// 	})
	// 	.then((response) => {
	// 		setResults(response?.data?.results)
	// 	})
	// 	.catch((error) => {
	// 		console.error(error)
	// 	})
	// }

	// for testing tthe api call 
	// console.log(results);

	const propertyAddress = Content.propertyDetails.testAddress
	const titleNumber = Content.propertyDetails.testTitleNumber
	const landTitleDistrict = Content.propertyDetails.testLandTitleDistrict
	const parcelIdentifier = Content.propertyDetails.testParcelIdentifier
	const shortLegalDescription = Content.propertyDetails.testShortLegalDescription
	const numberOfOwner = 2

	return (
		<div className={`${Styles.propertyDetailsWrap}` + " text-left"}>
			<div className={`${Styles.addressWrap}`}>
				<div className={`${Styles.title}`}>
					{Content.propertyDetails.residentialAddress}
				</div>
				<div className={`${Styles.content}`}>
					{propertyAddress}
				</div>
			</div>
			<div className={`${Styles.propertyInfoWrap}` + " " + `${Styles.leftBuleBar}`}>
				<div className={`${Styles.title}` + " " + `${Styles.sectionTitle}`}>
					<PropertyIconSmall />
					<span>{Content.propertyDetails.propertyDetails}</span>
				</div>
				<div className={`${Styles.content}` + " flex "}>
					<div className={`${Styles.item}`}>
						<div className={`${Styles.title}`}>
							{Content.propertyDetails.titleNumber}
						</div>
						<div className={`${Styles.content}`}>
							{titleNumber}
						</div>
					</div>
					<div className={`${Styles.item}`}>
						<div className={`${Styles.title}`}>
							{Content.propertyDetails.landTitleDistrict}
						</div>
						<div className={`${Styles.content}`}>
							{landTitleDistrict}
						</div>
					</div>
					<div className={`${Styles.item}`}>
						<div className={`${Styles.title}`}>
							{Content.propertyDetails.parcelIdentifier}
						</div>
						<div className={`${Styles.content}`}>
							{parcelIdentifier}
						</div>
					</div>
					<div className={`${Styles.item}`}>
						
						<div className={`${Styles.title}`}>
							{Content.propertyDetails.shortLegalDescription}
						</div>
						<div className={`${Styles.content}`}>
							{shortLegalDescription}
						</div>
					</div>
					
				</div>
			</div>
			<div className={`${Styles.ownershipWrap}` + " " + `${Styles.leftBuleBar}`}>
				<div className={`${Styles.title}` + " " + `${Styles.sectionTitle}`}>
					<GroupUserIcon />
					<span>{Content.propertyDetails.ownership}</span>
				</div>
				<div className={`${Styles.ownerWrap}`}>
					<div className={`${Styles.title}`}>
						{Content.propertyDetails.numberOfOwner} {numberOfOwner}
					</div>
					<PropertyOwner />
				</div>
				
			</div>
		</div>
	)
}


export default PropertyDetails;
