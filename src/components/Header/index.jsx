import styles from './header.module.css'
import Navigation from '../Navigation'
import Logo from '../Logo'

const Header = ({updatePage, showMobileMenu, mobileMenu, closeMobileMenu, currentPage}) => {

  return (
    <header className={styles.header}>
      <Logo />
      <Navigation updatePage={updatePage} showMobileMenu={showMobileMenu} mobileMenu={mobileMenu} closeMobileMenu={closeMobileMenu} currentPage={currentPage}/>
    </header>
  )
}

export default Header