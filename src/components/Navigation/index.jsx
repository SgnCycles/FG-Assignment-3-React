import styles from './navigation.module.css'
import navMenu from '../../data/navigation.js'

const Navigation = ({updatePage}) => {
  return (
    <nav className={styles.navigation}>
      {navMenu.map((item, index) => <a className={styles.navItem} key={index} href={item.link} onClick={(event) => {
        event.preventDefault()
        updatePage(item.menuItem)}}>{item.menuItem}</a>)}
    </nav>
  )
}

export default Navigation