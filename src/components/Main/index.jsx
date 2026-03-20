import styles from './main.module.css'
import pageContent from "../../data/pageContent";
import homepageContent from '../../data/homepageContent';
import Hero from '../Hero'
import PageDescription from '../PageDescription'
import Facts from '../Facts'
import Tips from '../Tips'
import AppContainer from '../AppContainer';

const Main = ({page, mobileMenu}) => {

const pageCategoryType = pageContent.find(item => page === item.pageType);

  return (
    <div className={`${styles.main} ${mobileMenu ? styles.blur : ''}`}>
      <Hero page={page}/>
      <Facts page={page} pageCategoryType={pageCategoryType} homepageContent={homepageContent}/>
      <PageDescription page={page} pageCategoryType={pageCategoryType}/>
      <Tips page={page} pageCategoryType={pageCategoryType}/>
      <AppContainer page={page}/>
    </div>
  )
}

export default Main