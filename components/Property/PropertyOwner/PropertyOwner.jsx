import PropTypes from 'prop-types'
import Image from 'next/image'
import Styles from './PropertyOwner.module.css'
import Content from '../../../content.json'
import { Button } from '../../Button/index'
import { useState, useEffect } from 'react'
import Endpoints from '../../../apiManager/endpoints'
import axios from 'axios'
import ManagePINDropdown from '../ManagePINDropdown/index'

function PropertyOwner  ({
	fullName, 
	mailingAddress
})  {
	
	function handlePINHistory(){

	}

	return (
		<div className={`${Styles.ownerInfoCardWrap}` + " text-left"}>
			<div className={`${Styles.title}`}>
				{Content.propertyDetails.owner}
			</div>
			<div className="flex">
				<div className={`${Styles.infoDetailWrap}`}>
					<div className={`${Styles.title}`}>
						{Content.propertyDetails.fullname}
					</div>
					<div className={`${Styles.content}`}>
						{fullName}
					</div>
				</div>
				<div className={`${Styles.infoDetailWrap}`}>
					<div className={`${Styles.title}`}>
						{Content.propertyDetails.mailingAddress}
					</div>
					<div className={`${Styles.content}`}>
						{mailingAddress}
					</div>
				</div>
			</div>
			<div className={`${Styles.buttonWrap}` + " flex justify-start"}>
				<div className={`${Styles.buttonItem}`}>
					<ManagePINDropdown />
				</div>
				<div className={`${Styles.buttonItem}`}>
					<Button 
						variant="secondary"
						isDarkBackground={false}
						disabled={false}
						aria-disabled={false}
						handleOnClick={handlePINHistory}
					>
						{Content.propertyDetails.viewPINHistory}
					</Button>
				</div>
			</div>
		</div>
	)
}


export default PropertyOwner;



PropertyOwner.protoTypes = {
	fullName: PropTypes.string,
	mailingAddress: PropTypes.string 
}
