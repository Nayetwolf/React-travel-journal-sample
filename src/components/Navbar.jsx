
import logo from './logo.svg';
import styles from '../components/ModuleStyles/Navbar.module.css';

import React from 'react'

function Navbar() {
  return (
    <nav className={styles.nav}>
      <img src={logo} alt="Navbar logo" className={styles.logo}/>
      <h1>My Morocco Travel Journal</h1>
    </nav>
  )
}

export default Navbar