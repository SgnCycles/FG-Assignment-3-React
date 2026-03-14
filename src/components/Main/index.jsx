import styles from './main.module.css'
import pageContent from "../../data/pageContent";
import Hero from '../Hero'
import PageDescription from '../PageDescription'
import Facts from '../Facts'
import Tips from '../Tips'
import AppContainer from '../AppContainer';

const Main = ({page}) => {

const pageObject = pageContent.find((item) => page === item.pageType);

  return (
    <div className={styles.main}>
      <Hero page={page}/>
      <Facts page={page} pageObject={pageObject}/>
      <PageDescription page={page} pageObject={pageObject}/>
      <Tips page={page} pageObject={pageObject}/>
      <AppContainer page={page}/>
    </div>
  )
}

export default Main