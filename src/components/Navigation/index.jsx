import styles from './navigation.module.css'
import navMenu from '../../data/navigation.js'

const Navigation = ({updatePage}) => {
  return (
    <nav className={styles.navigation}>
      {navMenu.map((item, index) => <span className={styles.navItem} key={index} onClick={() => updatePage(item.menuItem)}>{item.menuItem}</span>)}
    </nav>
  )
}

export default Navigation