import styles from './navigation.module.css'
import navMenu from '../../data/navigation.js'
import Hamburger from '../Hamburger'

const Navigation = ({updatePage, showMobileMenu, mobileMenu, closeMobileMenu, currentPage}) => {

  const activePage = currentPage === 'Home' ? null : currentPage

  return (
    <nav className={styles.navigation}>
      <Hamburger showMobileMenu={showMobileMenu} mobileMenu={mobileMenu}/>
      <ul className={`${styles.navMenuList} ${mobileMenu ? styles.active : ''}`}>
        {navMenu.map((item, index) => <li className={`${styles.navItem} ${item.menuItem === activePage ? styles.active : ''}`} key={index} onClick={() => {
          updatePage(item.menuItem)
          closeMobileMenu()
          }}>{item.menuItem}</li>)}
      </ul>
    </nav>
  )
}

export default Navigation