import PropTypes from 'prop-types'
import Image from 'next/image'
import Styles from './PropertyOwner.module.css'
import Content from '../../../content.json'
import { Button } from '../../Button/index'
import { useState, useEffect } from 'react'
import Endpoints from '../../../apiManager/endpoints'
import axios from 'axios'

function PropertyOwner  ({
})  {
	
	return (
		<div className={`${Styles.searchWrap}` + " flex items-start justify-center"}>
			Property Owner
		</div>
	)
}


export default PropertyOwner;
