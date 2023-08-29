import PropTypes from 'prop-types'

import styles from './LoadingScreen.module.css'

export default function LoadingScreen(props) {
    const { loadingText, loaderIcon } = props

    return (
        <section>
            <div className={styles.container}>
                <div className={styles.loadingImg}>
                    {loaderIcon && loaderIcon}
                </div>

                <span className={styles.loadingText}>{loadingText}</span>
            </div>
        </section>
    )
}

LoadingScreen.propTypes = {
    loadingText: PropTypes.string.isRequired,
    loaderIcon: PropTypes.element.isRequired,
}
