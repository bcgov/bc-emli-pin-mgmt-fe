import PropTypes from 'prop-types'
import Image from 'next/image'
import Styles from './PropertyTitleDetails.module.css'
import Content from '../../../content.json'
import { Button } from '../../Button/index'
import { useState, useEffect } from 'react'


import PropertyIconSmall from '../../../assets/svgs/PropertyIconSmall'
import GroupUserIcon from '../../../assets/svgs/GroupUserIcon'
import PropertyOwner from '../PropertyOwner/PropertyOwner'

function PropertyTitleDetails({
    titleNumber,
    landTitleDistrict,
    parcelIdentifier,
    numberOfOwner,
    ownerList
}) {
    return (
        <div className={`${Styles.ownershipWrap}` + " " + `${Styles.leftBuleBar}` + " " + `${Styles.propertyInfoWrap}`}>
            <div className={`${Styles.title}` + " " + `${Styles.sectionTitle}`}>
                <PropertyIconSmall />
                <span>{Content.propertyDetails.titleDetails}</span>
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
            </div>

            <div className={`${Styles.title}` + " " + `${Styles.sectionTitle}`}>
                <GroupUserIcon />
                <span>{Content.propertyDetails.ownership}</span>
            </div>
            <div className={`${Styles.ownerWrap}` + " " + "text-left"}>
                <div className={`${Styles.title}`}>
                    {Content.propertyDetails.numberOfOwner} {numberOfOwner}
                </div>
                {
                    ownerList && ownerList.map((owner) => (
                    <PropertyOwner
                        key={owner.id}
                        fullName={owner.fullName}
                        mailingAddress={owner.mailingAddress}
                        livePinId={owner.id}
                        livePIN={owner.livePIN}
                    />
                ))}
            </div>
        </div>
    )
}

export default PropertyTitleDetails

PropertyTitleDetails.protoTypes = {
    titleNumber: PropTypes.string,
    landTitleDistrict: PropTypes.string,
    parcelIdentifier: PropTypes.string,
    shortLegalDescription: PropTypes.string,
    numberOfOwner: PropTypes.number,
    ownerList: PropTypes.array
}
