import styles from './navigationCards.module.css'
import navCards from '../../data/navigationCards.js'

const NavigationCards = ({updatePage}) => {

  return (
  <div className={styles.navigationCardSection}>
    <div className={styles.navigationCardWrapper}>
      {navCards.map((item, index) =>
       <div className={styles.navigationCard} key={index}>
        <h2 className={styles.navigationCardHeader}>{item.item}</h2>
        <p className={styles.navigationCardSubtitle}>{item.subtitle}</p>
        <p className={styles.navigationCardLink} onClick={()=> updatePage(item.item)}>Learn More <span className={styles.navigationCardArrow}>&#8594;</span></p>
      </div>)}
    </div>
  </div>
  )
}

export default NavigationCards