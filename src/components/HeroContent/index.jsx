import styles from './herocontent.module.css'
import heroContent from '../../data/heroContent'

const HeroContent = ({page}) => {

  const heroObject = heroContent.find(item => page === item.pageType)

  return (
    <>
    {!page && <div className={styles.heroContent}>
      <h1 className={styles.heroHeader}>{heroObject.heroHeader}</h1>
      <div className={styles.heroSubtitle}>{heroObject.heroSubtitle}</div>
      </div>}
    {page && <div className={`${styles.heroContent}`}>
      <h1 className={`${styles.heroHeader} ${styles[heroObject.pageType.toLowerCase()]}`}>{heroObject.heroHeader}</h1>
      <div className={`${styles.heroSubtitle} ${styles[heroObject.pageType]}`}>{heroObject.heroSubtitle}</div>
      </div>}
    </>
  )
}

export default HeroContent