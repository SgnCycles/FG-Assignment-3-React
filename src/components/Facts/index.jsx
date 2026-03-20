import styles from "./facts.module.css";

const Facts = ({pageCategoryType}) => {
  
  return (
    <div className={styles.factSection}>
      <h2 className={styles.factHeader}>Did You Know?</h2>
      <div className={styles.factWrapperSection}>
        {pageCategoryType.facts.map((item, index) => (
          <div key={index} className={styles.factWrapper}>
            <h3 className={styles.factDescriptionHeader}>{item.number}</h3>
            <div className={styles.factDescriptionSubtitle}>
              {item.statement}
            </div>
          </div>
        ))}
      </div>
    </div>
   )
}

export default Facts