import styles from "./pagedescription.module.css";
import homepageContent from '../../data/homepageContent'

const PageDescription = ({page, pageObject}) => {
const homepageObject = homepageContent
  return (
    <>
      {!page && (
        <div className={`${styles.pageDescription} ${styles.pageDescriptionHome}`}>
          <h2 className={`${styles.pageDescriptionHeader} ${styles.pageDescriptionHeaderHome}`}>
            {homepageObject.pageHeader}
          </h2>
          <div className={`${styles.pageDescriptionSubtitle} ${styles.pageDescriptionSubtitleHome}`}>
            {homepageObject.pageSubtitle}
          </div>
        </div>
      )}
      {page && (
        <div className={`${styles.pageDescription} ${styles.pageDescriptionOther}`}>
          <h2
            className={`${styles.pageDescriptionHeader} ${styles[pageObject.pageType.toLowerCase()]}`}
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