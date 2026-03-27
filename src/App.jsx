import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Home from './components/Home'
import './index.css'

function App() {

  const [page, setPage] = useState(null)
  const [mobileMenu, setMobileMenu] = useState(false)

  const updatePage = (page) => {
    setPage(page === 'Home' ? null : page)
  }

  const showMobileMenu = () => {
    setMobileMenu(!mobileMenu)
  }

  const closeMobileMenu = () => {
    setMobileMenu(false)
  }

  return (
    <>
      <Header updatePage={updatePage} showMobileMenu={showMobileMenu} mobileMenu={mobileMenu} closeMobileMenu={closeMobileMenu} />
      {!page && <Home page={page} updatePage={updatePage} mobileMenu={mobileMenu} />}
      {page && <Main page={page} mobileMenu={mobileMenu}/> }
      <Footer />
    </>
  )
}

export default App
