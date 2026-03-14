import { useState } from 'react'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Home from './components/Home'
function App() {

  const [page, setPage] = useState(null)

  const updatePage = (page) => {
    setPage(page === 'Home' ? null : page)
  }

  return (
    <>
      <Header updatePage={updatePage}/>
      {!page && <Home page={page} updatePage={updatePage}/>}
      {page && <Main page={page}/> }
      <Footer />
    </>
  )
}

export default App