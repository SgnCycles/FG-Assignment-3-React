import styles from './header.module.css'
import Navigation from '../Navigation'
import Logo from '../Logo'

const Header = ({updatePage}) => {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation updatePage={updatePage}/>
    </header>
  )
}

export default Header