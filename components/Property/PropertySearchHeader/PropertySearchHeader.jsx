import PropTypes from 'prop-types'
import Image from 'next/image'
import Styles from './PropertySearchHeader.module.css'
import Content from '../../../assets/content/content.json'
import PropertyLogo from '../../../assets/svgs/PropertyIcon'

function PropertySearchHeader  ({
	title,
	userName,
})  {

	return (
		<div className={`${Styles.contentWrap}` + " flex justify-center"}>
			<div className={`${Styles.propertyIconWrap}` + " flex items-center justify-center"} >
				<PropertyLogo />
			</div>
			<div className='text-left'>
				<h1 className={`${Styles.title}`}>{Content.home.searchHeader}</h1>
				<div className={`${Styles.content}`}>{Content.home.searchContent}</div>
			</div>
		</div>
	)
}


export default  PropertySearchHeader;

