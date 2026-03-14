import styles from './appcard.module.css'
import { getThumbnailImageUrl, getIconImageUrl } from '../../utils/getimage.js'

const AppCard = ({app}) => {

  return (
    <div className={styles.appCard}>
      <div className={styles.appCardHeader}>
        <div className={styles.appCardIcon}>
         <img src={getIconImageUrl(app.icon)} height='20px' width='auto' />
        </div>
        <h3 className={styles.appCardTitle}>{app.name}</h3>
      </div>
      <div className={styles.appCardThumbnail}>
        <img src={getThumbnailImageUrl(app.image)} height='100px' width='auto'/>
      </div>
      <div className={styles.appCardSubtitle}>{app.description}</div>
      <button className={styles.appCardButton}><a href={app.website} target='_blank'>Check it out</a></button>
    </div>
  )
}

export default AppCard