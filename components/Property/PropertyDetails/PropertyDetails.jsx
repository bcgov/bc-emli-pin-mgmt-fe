import Styles from './PropertyDetails.module.css'
import Content from '../../../content.json'
import { Button } from '../../Button/index'
import { useState, useEffect } from 'react'
import Endpoints from '../../../apiManager/endpoints'
import axios from 'axios'
import PropertyIconSmall from '../../../assets/svgs/PropertyIconSmall'
import GroupUserIcon from '../../../assets/svgs/GroupUserIcon'
import PropertyOwner from '../PropertyOwner/PropertyOwner'
import PropTypes from 'prop-types'
// import PropertyNoResultIcon from '../../../assets/svgs/PropertyNoResultIcon';
import PropertyResultIcon from '../../../assets/svgs/PropertyResultIcon'
function PropertyDetails({
	searchResultLayout,
	resultCount,
	displayDetails
}) {
	const propertyAddress = Content.propertyDetails.testAddress
	const titleNumber = Content.propertyDetails.testTitleNumber
	const landTitleDistrict = Content.propertyDetails.testLandTitleDistrict
	const parcelIdentifier = Content.propertyDetails.testParcelIdentifier
	const shortLegalDescription = Content.propertyDetails.testShortLegalDescription
	const numberOfOwner = 2
	const layoutClass = searchResultLayout ? 
		Styles.propertyDetailsWrap + " " + Styles.paddingSmall :
		Styles.propertyDetailsWrap + " " + Styles.paddingLarge

	if (displayDetails) {
		return (
			<div className={layoutClass}>
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
	} else if (resultCount === 0){
		return (
			<div className={layoutClass + " flex items-center justify-center content-center flex-col"}>
				{/* <PropertyNoResultIcon /> */}
				<div className={`${Styles.noResultMsgWrap}`}>
					{Content.propertyDetails.noSearchResultMsg}
				</div>
			</div>
		)
	} else {
		return (
			<div className={layoutClass + " flex items-center justify-center content-center flex-col"}>
				<PropertyResultIcon />
				<div className={`${Styles.resultMsgWrap}`}>
					{Content.propertyDetails.searchResultMsg}
				</div>
			</div>
		)
	}
}



PropertyDetails.protoTypes = {
	searchResultLayout: PropTypes.boolean,
	resultCount: PropTypes.number,
	displayDetails: PropTypes.boolean

}

PropertyDetails.defaultProps = {
	searchResultLayout: true,
	resultCount: 1,
	displayDetails: false

}

export default PropertyDetails;