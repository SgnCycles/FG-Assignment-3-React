import { useState } from 'react'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

function App() {

  const [page, setPage] = useState(null)
  
  const updatePage = (page) => {
    setPage(page === 'Home' ? null : page)
  }

  return (
    <>
      <Header updatePage={updatePage}/>
      <Main page={page}/>
      <Footer />
    </>
  )
}

export default App