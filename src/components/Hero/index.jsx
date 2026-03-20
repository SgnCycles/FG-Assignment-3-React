import styles from './hero.module.css'
import HeroContent from '../HeroContent'

const Hero = ({page}) => {
  return (
    <>
      {!page && <div className={`${styles.hero} ${styles.heroHomepage}`}>
        <HeroContent page={page} />
      </div> }
      {page === 'Clothes' && <div className={`${styles.hero} ${styles.heroClothes}`}>
        <HeroContent page={page} />
      </div> }
      {page === 'Food' && <div className={`${styles.hero} ${styles.heroFood}`}>
        <HeroContent page={page} />
      </div> }
      {page === 'Electronics' && <div className={`${styles.hero} ${styles.heroElectronics}`}>
        <HeroContent page={page} />
      </div> }
    </>
  )
}

export default Hero