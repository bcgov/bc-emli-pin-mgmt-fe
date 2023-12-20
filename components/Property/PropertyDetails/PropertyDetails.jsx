import Styles from './PropertyDetails.module.css'
import Content from '../../../assets/content/content.json'
import { useState, useEffect } from 'react'
import PropertyTitleDetails from '../PropertyTitleDetails/PropertyTitleDetails'
import PropertyNoResultIcon from '../../../assets/svgs/PropertyNoResultIcon'
import HttpRequest from '../../../apiManager/httpRequestHandler/index'
import InfoIcon from '../../../assets/svgs/InfoIcon'
import CloseIcon from '../../../assets/svgs/CloseIcon'
import PropTypes from 'prop-types'


function PropertyDetails({
	propertySiteId,
  propertyAddress,
  role,
  reloadPage,
  reloaded
}) {
	const [currentPropertyDetail, setCurrentPropertyDetail] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const displayDetails = propertySiteId !== '' ? true : false
  const [multiplePropertiesAlert, setMultiplePropertiesAlert] = useState(true)
      
  useEffect(() => {
    setLoading(true)
    if (propertySiteId !== '') {
      HttpRequest.getPropertyDetail(propertySiteId)
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
      reloaded()
  }, [propertySiteId, reloadPage]);


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
          const address2 = ownerData.addressLine_2 ? ', ' + ownerData.addressLine_2.trim() : ''
          const postalCode = ownerData.postalCode ? ' ' + ownerData.postalCode.trim() : ''
          const province = ownerData.provinceAbbreviation ? ' ' + ownerData.provinceAbbreviation.trim() : ''
          const country = ownerData.country ? ' ' + ownerData.country.trim() : ''
          
          const owner = {
            id: ownerData.livePinId,
            fullName: ownerData.givenName + ' ' + ownerData.lastName_1 + lastName2,
            livePIN: ownerData.pin,
            mailingAddress: ownerData.addressLine_1.trim().toLowerCase() + address2.toLowerCase() +  '\n' + ownerData.city.trim().toLowerCase() +  ', ' + province + ' ' + postalCode + '\n' + country.toLowerCase(),
            incorporationNumber: ownerData.incorporationNumber
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
        (currentPropertyDetail?.length > 0 && !isLoading) &&
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
            currentPropertyDetail.length > 1 && multiplePropertiesAlert &&
            <div className={`${Styles.multipleTitlesAlert}`}>
              <InfoIcon />
              <span className={`${Styles.alertText}`}>
                {Content.propertyDetails.multipleTitlesAlertText}
              </span>
              <button 
                className={`${Styles.closeIcon}`} 
                onClick={() => setMultiplePropertiesAlert(false)} 
                name={Content.propertyLayout.closeButton}
              >
                <CloseIcon />
              </button>
            </div>
          }
          {
            currentPropertyDetail.map((item, i) => (
              <PropertyTitleDetails
                key={item.id}
                titleCount={i}
                numberOfTitles={currentPropertyDetail.length}
                titleNumber={item.titleNumber}
                landTitleDistrict={item.landTitleDistrict}
                parcelIdentifier={item.parcelIdentifier}
                numberOfOwner={item.ownerList.length}
                ownerList={item.ownerList}
                propertyAddress={propertyAddress}
                role={role}
                siteId={propertySiteId}
                reloadPage={reloadPage}
              />
            ))
          }
        </div>
      }
      {
        (currentPropertyDetail?.length === 0 && !isLoading) &&
        <div className={`${Styles.noDataFoundWrap}`}>
          <div className={"flex items-center justify-center content-center flex-col"}>
            <span className={`${Styles.noDataFound}`}>
              <PropertyNoResultIcon />
            </span>
            <div className={`${Styles.noDataFoundMsgWrap}`}>
              {Content.propertyDetails.noDataFoundMsg}
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default PropertyDetails;

PropertyDetails.protoTypes = {
  propertySiteId: PropTypes.string,
  propertyAddress: PropTypes.string,
  role: PropTypes.object,
  reloadPage: PropTypes.func,
  reloaded: PropTypes.func,
}
