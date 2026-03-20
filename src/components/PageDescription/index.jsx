import styles from "./pagedescription.module.css";
import homepageContent from '../../data/homepageContent'

const PageDescription = ({page, pageCategoryType}) => {
  
return (
    <>
      {!page && (
        <div className={`${styles.pageDescription} ${styles.pageDescriptionHome}`}>
          <h2 className={`${styles.pageDescriptionHeader} ${styles.pageDescriptionHeaderHome}`}>
            {homepageContent.pageHeader}
          </h2>
          <div className={`${styles.pageDescriptionSubtitle} ${styles.pageDescriptionSubtitleHome}`}>
            {homepageContent.pageSubtitle}
          </div>
        </div>
      )}
      {page && (
        <div className={`${styles.pageDescription} ${styles.pageDescriptionOther}`}>
          <h2
            className={`${styles.pageDescriptionHeader} ${styles[pageCategoryType.pageType.toLowerCase()]}`}
          >
            {pageCategoryType.pageHeader}
          </h2>
          <div
            className={`${styles.pageDescriptionSubtitle} ${styles[pageCategoryType.pageType]}`}
          >
            {pageCategoryType.pageSubtitle}
          </div>
        </div>
      )}
    </>
  );
};

export default PageDescription;