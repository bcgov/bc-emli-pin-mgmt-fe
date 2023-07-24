import propTypes from 'prop-types'
// import styles from './styles.css' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faExternalLinkAlt 
} from "@fortawesome/free-solid-svg-icons"

export const Link = ({
    href,
    target,
    content,
    external,
    ...props
}) => {
    const externalIcon = external ? 'not-hidden' : 'hidden';
    return (
        <div>
            <a
            href={href} 
            target={target}
            {...props}
            type="link" name="link"
            >
                {content}
            </a>
            <FontAwesomeIcon icon={faExternalLinkAlt} className={`fas fa-external-link-alt ${externalIcon}`}/>
        </div>
    )
}

Link.propTypes = {
    target: propTypes.oneOf(['_blank', '_self', '_parent', '_top']),
    external: propTypes.bool
}

Link.defaultProps = {
    target: '_self',
    external: false
}