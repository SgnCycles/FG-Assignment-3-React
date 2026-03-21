import styles from './footer.module.css'
import FooterContent from '../FooterContent'

const Footer = () => {
  
  return (
    <div className={styles.footer}>
      <FooterContent />
      <div className={styles.footerSignature}>&copy; 2026 Earthling. Making sustainable choices accessible.</div>
    </div>
  )
}

export default Footer