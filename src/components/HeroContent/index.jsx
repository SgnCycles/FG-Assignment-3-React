import styles from './herocontent.module.css'
import heroContent from '../../data/heroContent'
import homepageContent from '../../data/homepageContent'

const HeroContent = ({page}) => {

  const pageHero = heroContent.find(item => page === item.pageType)

  return (
    <>
    {!page && <div className={styles.heroContent}>
      <h1 className={styles.heroHeader}>{homepageContent.heroHeader}</h1>
      <div className={styles.heroSubtitle}>{homepageContent.heroSubtitle}</div>
      </div>}
    {page && <div className={`${styles.heroContent}`}>
      <h1 className={`${styles.heroHeader} ${styles[pageHero.pageType.toLowerCase()]}`}>{pageHero.heroHeader}</h1>
      <div className={`${styles.heroSubtitle} ${styles[pageHero.pageType.toLowerCase()]}`}>{pageHero.heroSubtitle}</div>
      </div>}
    </>
  )
}

export default HeroContent