import styles from './home.module.css'
import homepageContent from '../../data/pageContent'
import Hero from '../Hero'
import PageDescription from '../PageDescription'
import NavigationCards from '../NavigationCards'

const Home = ({page, updatePage, mobileMenu}) => {

const homepageObject = homepageContent;

  return (
    <div className={`${styles.main} ${mobileMenu ? styles.blur : ''}`}>
      <Hero page={page}/>
      <PageDescription page={page} pageObject={homepageObject}/>
      <NavigationCards updatePage={updatePage}/>
    </div>
  )
}

export default Home