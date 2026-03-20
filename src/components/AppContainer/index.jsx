import styles from './appContainer.module.css'
import AppCard from '../AppCard'
import apps from "../../data/apps.js"

const AppContainer = ({page}) => {

  const appObject = apps.filter(item => page === item.category);

  return (
    <div className={styles.appContainer}>
      <h2 className={styles.appContainerHeader}>Here are the apps for {page} to explore</h2>
      <div className={styles.appCardContainer}>
        {appObject.map((app, index) => <AppCard key={index} app={app}/>)}
      </div>
    </div>
  )
}

export default AppContainer