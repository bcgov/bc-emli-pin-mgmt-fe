import styles from './PageBanner.module.css'

export default function PageBanner(props) {
    const {
      title,
      description,
      children
    } = props;

    return (
      <div className={`${styles.container}`}>
        <div className={`${styles.bannerSection}`}>
          <div className={`${styles.content}`}>
            <div className={`${styles.bannerImageSection}`}>
              {children}
            </div>
            <div className={`${styles.bannerTextSection}`}>
              <div className={`${styles.titleSection}`}>
                <h1 className={`${styles.title}`}>{title}</h1>
              </div>
              <div className={`${styles.descriptionSection}`}>
                <h6 className={`${styles.description}`}>{description}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
