import React from 'react';
import styles from "./styles/banner.module.css";

const Banner = () => {
  return (
    <div className={styles.BannerContainer}>
        <div className={styles.details_container}>
            {/* <h1 className={styles.title}>We have helped businesses stay afloat during difficult times.</h1> */}
            <h1 className={styles.title}>SITE UNDER MAINTANANCE</h1>
            {/* <p className={styles.story}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis vitae tenetur reiciendis 
                quis voluptates voluptatum aperiam natus quia, molestias blanditiis, totam fuga officiis 
                accusantium dignissimos. Iste minima omnis porro praesentium consequatur saepe vel, 
                repudiandae architecto deleniti. Corporis repellat esse, aspernatur eos obcaecati suscipit 
                doloribus distinctio ipsam perferendis modi aliquid cumque.
            </p> */}
        </div>
        {/* <div className={styles.cta_btn_box}>
            <button className={styles.cta_btn}>Get Started</button>
            <button className={styles.cta_btn}>Continue with Google</button>
        </div> */}
    </div>
  )
}
 
export default Banner