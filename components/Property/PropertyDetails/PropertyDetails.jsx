import Styles from './PropertyDetails.module.css'
import Content from '../../../assets/content/content.json'
import { useState, useEffect } from 'react'
import PropertyTitleDetails from '../PropertyTitleDetails/PropertyTitleDetails'
import PropertyNoResultIcon from '../../../assets/svgs/PropertyNoResultIcon'
import HttpRequest from '../../../apiManager/httpRequestHandler/index'


function PropertyDetails({
	propertySiteId,
  propertyAddress
}) {

	const [currentPropertyDetail, setCurrentPropertyDetail] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const displayDetails = propertySiteId !== '' ? true : false
      
 
  useEffect(() => {
    setLoading(true)
    if (propertySiteId !== '') {
      // TO DO: to be removed after backend finish
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


  const propertyDetailsMapping = (data) => {
    const details = []

    Object.keys(data).forEach(key => {
      const item = {
        id: key,
        titleNumber: key.split('|')[0],
        landTitleDistrict: key.split('|')[1], 
        parcelIdentifier: data[key][0].pids, 
        ownerList:[]
      }
      if (data[key] != null){
        data[key].map((ownerData) => {
          const lastName2 = ownerData.lastName_2 ? ' ' + ownerData.lastName_2 : ''
          const address2 = ownerData.addressLine_2 ? ', ' + ownerData.addressLine_2 : ''
          const postalCode = ownerData.postalCode ? ' ' + ownerData.postalCode : ''
          const country = ownerData.country.toLowerCase() === 'canada' ? ' ' : ' ' + ownerData.country
          
          const owner = {
            id: ownerData.livePinId,
            fullName: ownerData.givenName + ' ' + ownerData.lastName_1 + lastName2,
            livePIN: ownerData.pin,
            mailingAddress: ownerData.addressLine_1 + address2 +  ', ' + ownerData.city + ' ' + postalCode + country
          }
          item.ownerList.push(owner)
        })
        details.push(item)
      }
    })
    return details
  }


	const layoutClass = displayDetails ?
		Styles.propertyDetailsWrap + " " + Styles.paddingLarge :
		Styles.propertyDetailsWrap + " " + Styles.paddingSmall



  return (
    <div className={layoutClass}>
      {
        (currentPropertyDetail !== null && !isLoading) &&
        <div className={`${Styles.details}`}>
          <div className={`${Styles.addressWrap}` + " " + "text-left"}>
            <div className={`${Styles.title}`}>
              {Content.propertyDetails.residentialAddress}
            </div>
            <div className={`${Styles.content}`}>
              {propertyAddress}
            </div>
          </div>
          {
            currentPropertyDetail.map((item) => (
              <PropertyTitleDetails
                key={item.id}
                titleNumber={item.titleNumber}
                landTitleDistrict={item.landTitleDistrict}
                parcelIdentifier={item.parcelIdentifier}
                numberOfOwner={item.ownerList.count}
                ownerList={item.ownerList}
              />
            ))
          }
        </div>
      }
      {
        (currentPropertyDetail === null && !isLoading) &&
        <div className={"flex items-center justify-center content-center flex-col"}>
          <PropertyNoResultIcon />
          <div className={`${Styles.noResultMsgWrap}`}>
            {Content.propertyDetails.noSearchResultMsg}
          </div>
        </div>
      }
    </div>
  )
}

export default PropertyDetails;
