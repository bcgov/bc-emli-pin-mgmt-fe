import propTypes from 'prop-types'
// import './styles.css' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faExternalLinkAlt 
} from "@fortawesome/free-solid-svg-icons"

export const Link = ({
    href,
    content,
    external,
    ...props
}) => {
    const externalIcon = external ? 'not-hidden' : 'hidden';
    const externalLink = external ? '_blank' : '_self'
    return (
        <div>
            <a
            href={href} 
            target={externalLink}
            {...props}
            type="link" name="link"
            >
                {content}
            </a>
            <FontAwesomeIcon icon={faExternalLinkAlt} size="1x" className={`fas fa-external-link-alt ${externalIcon}`}/>
        </div>
    )
}

Link.propTypes = {
    external: propTypes.bool
}

Link.defaultProps = {
    external: false
}