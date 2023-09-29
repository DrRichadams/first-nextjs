import React from 'react';
import styles from "../../styles/Home.module.css";

const MainNavigation = () => {
  return (
    <div className={styles.nav_main}>
      <div><img src="/images/logo.png" alt="logo" /></div>
      <nav>
          <ul>
            <li>Projects</li>
            <li>Socials</li>
            <li>Contact Us</li>
          </ul>
          <div className={styles.cta_btn_box}>
            <button>Log In</button>
            <button>Get Started</button>
          </div>
      </nav>
    </div>
  )
}

export default MainNavigation