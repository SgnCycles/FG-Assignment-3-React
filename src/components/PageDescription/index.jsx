import styles from "./pagedescription.module.css";

const PageDescription = ({page, pageObject}) => {

  return (
    <>
      {!page && (
        <div className={styles.pageDescription}>
          <h2 className={styles.pageDescriptionHeader}>
            {pageObject.pageHeader}
          </h2>
          <div className={styles.pageDescriptionSubtitle}>
            {pageObject.pageSubtitle}
          </div>
        </div>
      )}
      {page && (
        <div className={`${styles.pageDescription}`}>
          <h2
            className={`${styles.heroHeader} ${styles[pageObject.pageType.toLowerCase()]}`}
          >
            {pageObject.pageHeader}
          </h2>
          <div
            className={`${styles.pageDescriptionSubtitle} ${styles[pageObject.pageType]}`}
          >
            {pageObject.pageSubtitle}
          </div>
        </div>
      )}
    </>
  );
};

export default PageDescription;