import React from 'react';
import styles from "../../styles/Home.module.css";

const MainNavigation = () => {
  return (
    <div className={styles.nav_main}>
      <div><img src="/images/logo.png" alt="logo" /></div>
      <nav>
          <ul className={styles.main_menu_items}>
            <li>Projects</li>
            <li>Socials</li>
            <li>Contact Us</li>
          </ul>
          <div className={styles.cta_btn_box}>
            <button>Log In</button>
            {/* <button>Get Started</button> */}
            <div className={styles.mobile_menu_btn}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
      </nav>
    </div>
  )
}

export default MainNavigation