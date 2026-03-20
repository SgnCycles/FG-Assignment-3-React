import styles from './tips.module.css'

const Tips = ({page, pageCategoryType}) => {

  return (
    <>
      {page &&
        <div className={styles.tipsSection}>
          <h2 className={styles.tipsSectionHeader}>Tips</h2> 
          <div className={styles.tipsWrapper}>
            <ul className={styles.tipsList}>
              {pageCategoryType.tips.map((item, index) => (
                <li key={index} className={styles.tipsListItem}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      }
    </>
  )
}

export default Tips