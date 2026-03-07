import styles from './tips.module.css'

const Tips = ({page, pageObject}) => {

  return (
    <>
    <div className={styles.tipsSection}>

      {page ? <h2 className={styles.tipsSectionHeader}>Tips</h2> : ''}

      {!page && (
        <div className={styles.tipsWrapper}></div>
      )}

      {page && (
        <div className={styles.tipsWrapper}>
          <ul className={styles.tipsList}>
            {pageObject.tips.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </>
  )
}

export default Tips