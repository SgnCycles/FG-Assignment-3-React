import styles from './header.module.css'
import Navigation from '../Navigation'
import Logo from '../Logo'

const Header = ({updatePage, showMobileMenu, mobileMenu, closeMobileMenu}) => {

  return (
    <header className={styles.header}>
      <Logo />
      <Navigation updatePage={updatePage} showMobileMenu={showMobileMenu} mobileMenu={mobileMenu} closeMobileMenu={closeMobileMenu} />
    </header>
  )
}

export default Header
