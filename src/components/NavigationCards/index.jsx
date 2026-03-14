import styles from './navigationCards.module.css'
import navCards from '../../data/navigationCards.js'

const NavigationCards = ({updatePage}) => {
  return (
  <div className={styles.navigationCardSection}>
    <div className={styles.navigationCardWrapper}>
      {navCards.map((item, index) =>
       <div className={styles.navigationCard} key={index}>
        <h2 className={styles.navigationCardHeader}>{item.item}</h2>
        <span className={styles.navigationCardSubtitle}>{item.subtitle}</span>
        <span className={styles.navigationCardLink} onClick={()=> updatePage(item.item)}>Learn More &#8594;</span>
      </div>)}
    </div>
  </div>
  )
}

export default NavigationCards