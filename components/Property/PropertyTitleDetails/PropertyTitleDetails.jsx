import PropTypes from 'prop-types'
import Styles from './PropertyTitleDetails.module.css'
import Content from '../../../assets/content/content.json'
import PropertyIconSmall from '../../../assets/svgs/PropertyIconSmall'
import GroupUserIcon from '../../../assets/svgs/GroupUserIcon'
import PropertyOwner from '../PropertyOwner/PropertyOwner'

function PropertyTitleDetails({
    titleCount,
    titleNumber,
    landTitleDistrict,
    parcelIdentifier,
    numberOfOwner,
    ownerList,
    numberOfTitles,
    propertyAddress
}) {
    return (
        <div>
            <div className={`${Styles.titleNumberHeader}`}>{Content.propertyDetails.titleNumberHeader} {titleCount + 1}</div>
            <div className={`${Styles.ownershipWrap}` + " " + `${Styles.propertyInfoWrap}`}>
                <div className={`${Styles.title}` + " " + `${Styles.sectionTitle}` + " " + `${Styles.leftBlueBar}` + " " + `${Styles.propertyDetailsTitle}`}>
                    <PropertyIconSmall />
                    <span>{Content.propertyDetails.propertyDetails}</span>
                </div>
                <div className={`${Styles.content}` + " flex text-left justify-between" + " " + `${Styles.leftBlueBar}`}>
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

                <div className={`${Styles.title}` + " " + `${Styles.sectionTitle}` + " " + `${Styles.leftBlueBar}`}>
                    <GroupUserIcon />
                    <span>{Content.propertyDetails.ownership}</span>
                </div>
                <div className={`${Styles.ownerWrap}` + " " + "text-left" + " " + `${Styles.leftBlueBar}`}>
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
                            propertyAddress={propertyAddress}
                        />
                    ))}
                </div>
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
    ownerList: PropTypes.array,
    propertyAddress: PropTypes.string
}
