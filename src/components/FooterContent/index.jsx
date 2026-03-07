import styles from './footercontent.module.css'
import footerContent from '../../data/footerContent.js'

const FooterContent = () => {
  return (
    <div className={styles.footerContentWrapper}>
      {footerContent.map((item, index) =>
      <div key={index} className={styles.footerContent}>
        <h3 className={styles.footerHeader}>{item.header}</h3>
        <div className={styles.footerDescription}>{item.description}</div>
      </div>
      )}
    </div>
  )
}

export default FooterContent