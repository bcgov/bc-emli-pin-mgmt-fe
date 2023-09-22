import Styles from './PropertyDetails.module.css'
import Content from '../../../content.json'
import { Button } from '../../Button/index'
import { useState, useEffect } from 'react'
import Endpoints from '../../../apiManager/endpoints'
import axios from 'axios'
import PropertyTitleDetails from '../PropertyTitleDetails/PropertyTitleDetails'
import PropertyNoResultIcon from '../../../assets/svgs/PropertyNoResultIcon'
import PropertyResultIcon from '../../../assets/svgs/PropertyResultIcon'
import PropTypes from 'prop-types'
import HttpRequest from '../../../apiManager/httpRequestHandler/index'


function PropertyDetails({
	propertySiteId,
}) {

	const propertyAddress = Content.propertyDetails.testAddress
	const [currentPropertyDetail, setCurrentPropertyDetail] = useState(null)
  const [isLoading, setLoading] = useState(false)

  const displayDetails = propertySiteId !== '' ? true : false
  useEffect(() => {
    setLoading(true)
    if(propertySiteId !== '') {
      const role = "SuperAdmin"

        HttpRequest.getPropertyDetail(propertySiteId, role)
            .then((response) => {
                // call converting data here
                const propertyDetails = propertyDetailsMapping(response?.data)
                setCurrentPropertyDetail(propertyDetails)
                setLoading(false)
            })
            .catch((error) => {
                console.error(error)
                setLoading(false)
            })
    }
  }, [propertySiteId]);

	const ownerList = [
		{
			id: 1,
			livePinId:'bc7140ec-9f7b-4dde-960a-9ae9438318b1',
			livePIN: '3Z4K2GA9',
			fullName: Content.propertyDetails.testFullName1,
			mailingAddress: Content.propertyDetails.testMailingAddress1,
		}, 
		{
			id: 2,
			livePinId:'123',
			livePIN: '',
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
			// shortLegalDescription: Content.propertyDetails.testShortLegalDescription,
			numberOfOwner: 2,
			ownerList: ownerList
		},
		{
			id: 2,
			titleNumber: Content.propertyDetails.testTitleNumber,
			landTitleDistrict: Content.propertyDetails.testLandTitleDistrict,
			parcelIdentifier: Content.propertyDetails.testParcelIdentifier,
			// shortLegalDescription: Content.propertyDetails.testShortLegalDescription,
			numberOfOwner: 2,
			ownerList: ownerList
		}, 
	]

  const propertyDetailsMapping = (data) => {
    const details = data ? data : null
      // enter mapping login here
    return details
  }


	const layoutClass = displayDetails ?
		Styles.propertyDetailsWrap + " " + Styles.paddingLarge :
		Styles.propertyDetailsWrap + " " + Styles.paddingSmall



  return (
    <div className={layoutClass}>
      {(currentPropertyDetail !== null && !isLoading) && <div className="details">
        <div className={`${Styles.addressWrap}` + " " + "text-left"}>
          <div className={`${Styles.title}`}>
            {Content.propertyDetails.residentialAddress}
          </div>
          <div className={`${Styles.content}`}>
            {propertyAddress}
          </div>
        </div>
        {
          titleList.map((item) => (
            <PropertyTitleDetails
              key={item.id}
              titleNumber={item.titleNumber}
              landTitleDistrict={item.landTitleDistrict}
              parcelIdentifier={item.parcelIdentifier}
              numberOfOwner={item.numberOfOwner}
              ownerList={item.ownerList}
            />
            ))
        }
      </div>}
      {(currentPropertyDetail === null && !isLoading) && <div className={"flex items-center justify-center content-center flex-col"}>
        <PropertyNoResultIcon />
        <div className={`${Styles.noResultMsgWrap}`}>
          {Content.propertyDetails.noSearchResultMsg}
        </div>
      </div>}
    </div>
  )
}



PropertyDetails.protoTypes = {
	propertyDetails: PropTypes.array,
	resultCount: PropTypes.number,
	displayDetails: PropTypes.boolean

}

PropertyDetails.defaultProps = {
	resultCount: 1,
}

export default PropertyDetails;
