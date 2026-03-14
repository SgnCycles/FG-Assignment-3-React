import styles from "./facts.module.css";
import homepageContent from "../../data/homepageContent";

const Facts = ({page, pageObject}) => {
  const homepageObject = homepageContent

  return (
    <>
      {!page && (
        <div className={styles.factSection}>
          <h2 className={styles.factHeader}>Did You Know?</h2>
          <div className={styles.factWrapperDiv}>
            {homepageObject.facts.map((item, index) => (
              <div key={index} className={styles.factWrapper}>
                <h3 className={styles.factDescriptionHeader}>{item.number}</h3>
                <div className={styles.factDescriptionSubtitle}>
                  {item.statement}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {page && (
        <div className={styles.factSection}>
          <h2 className={styles.factHeader}>Did You Know?</h2>
          <div className={styles.factWrapperDiv}>
            {pageObject.facts.map((item, index) => (
              <div key={index} className={styles.factWrapper}>
                <h3 className={styles.factDescriptionHeader}>{item.number}</h3>
                <div className={styles.factDescriptionSubtitle}>
                  {item.statement}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Facts;