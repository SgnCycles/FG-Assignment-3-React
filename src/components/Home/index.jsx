import styles from './home.module.css'
import Hero from '../Hero'
import PageDescription from '../PageDescription'
import NavigationCards from '../NavigationCards'
import homepageContent from "../../data/homepageContent";
import pageContent from '../../data/pageContent'

const Home = ({page, updatePage, mobileMenu}) => {

  return (
    <div className={`${styles.home} ${mobileMenu ? styles.blur : ''}`}>
      <Hero page={page}/>
      <PageDescription page={page} pageContent={pageContent} homepageContent={homepageContent}/>
      <NavigationCards updatePage={updatePage}/>
    </div>
  )
}

export default Home