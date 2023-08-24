import Styles from './PropertyDetails.module.css'
import Content from '../../../content.json'
import { Button } from '../../Button/index'
import { useState, useEffect } from 'react'
import Endpoints from '../../../apiManager/endpoints'
import axios from 'axios'


function PropertyDetails({
	resultCount,
	displayDetails
}) {
	// TODO: change to data from api
	const propertyAddress = Content.propertyDetails.testAddress

	const ownerList = [
		{
			id: 1,
			livePinId:'bc7140ec-9f7b-4dde-960a-9ae9438318b1',
			fullName: Content.propertyDetails.testFullName1,
			mailingAddress: Content.propertyDetails.testMailingAddress1
		}, 
		{
			id: 2,
			livePinId:'123',
			fullName: Content.propertyDetails.testFullName2,
			mailingAddress: Content.propertyDetails.testMailingAddress2
		}
	]
	
	const titleList = [
		{
			id: 1,
			titleNumber: Content.propertyDetails.testTitleNumber,
			landTitleDistrict: Content.propertyDetails.testLandTitleDistrict,
			parcelIdentifier: Content.propertyDetails.testParcelIdentifier,
			shortLegalDescription: Content.propertyDetails.testShortLegalDescription,
			numberOfOwner: 2,
			ownerList: ownerList
		},
		{
			id: 2,
			titleNumber: Content.propertyDetails.testTitleNumber,
			landTitleDistrict: Content.propertyDetails.testLandTitleDistrict,
			parcelIdentifier: Content.propertyDetails.testParcelIdentifier,
			shortLegalDescription: Content.propertyDetails.testShortLegalDescription,
			numberOfOwner: 2,
			ownerList: ownerList
		}, 
	]

	const layoutClass = displayDetails ? 
		Styles.propertyDetailsWrap + " " + Styles.paddingLarge : 
		Styles.propertyDetailsWrap + " " + Styles.paddingSmall 

	if (displayDetails) {
		return (
			<div className={layoutClass}>
			 	<div className={`${Styles.addressWrap}` + " " + "text-left"}>
			 		<div className={`${Styles.title}`}>
						{Content.propertyDetails.residentialAddress}
					</div>
					<div className={`${Styles.content}`}>
						{propertyAddress}
					</div>
				</div>
				{/* <div className={`${Styles.propertyInfoWrap}` + " " + `${Styles.leftBuleBar}`}>
					<div className={`${Styles.title}` + " " + `${Styles.sectionTitle}`}>
						<PropertyIconSmall />
						<span>{Content.propertyDetails.propertyDetails}</span>
					</div>
					<div className={`${Styles.content}` + " flex text-left justify-between"}>
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
				</div> */}
				{
					titleList.map((item) => (
						<PropertyTitleDetails 
							key={item.id}
							titleNumber={item.titleNumber}
							landTitleDistrict={item.landTitleDistrict}
							parcelIdentifier={item.parcelIdentifier}
							shortLegalDescription={item.shortLegalDescription}
							numberOfOwner={item.numberOfOwner}
							ownerList={item.ownerList}
						/>
						))
				}
			</div>
		)
	} else if (resultCount === 0){
		return (
			<div className={layoutClass + " flex items-center justify-center content-center flex-col"}>
				<PropertyNoResultIcon />
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
	resultCount: PropTypes.number,
	displayDetails: PropTypes.boolean

}

PropertyDetails.defaultProps = {
	resultCount: 1,
}

export default PropertyDetails;
