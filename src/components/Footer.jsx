import styles from '../components/ModuleStyles/Footer.module.css';


function Footer() {
  return (
     <section className={styles.footer}>
      <p>Made by
         <a className={styles.link} href="https://github.com/Nayetwolf" target="_blank" rel="noopener noreferrer"> Nayetwolf </a>
      </p>
     </section>
  )
}

export default Footer