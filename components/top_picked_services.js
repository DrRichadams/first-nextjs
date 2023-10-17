import React from 'react';
import styles from "./styles/top_picked.module.css";

const TopPicked = () => {
  return (
    <div className={styles.top_picked_container}>
        <h2 className={styles.header_title}>Top Picked Services</h2>
        <div className={styles.top_services_box}>
            <div className={styles.No1}>
                <div className={styles.top_service_details_box}>
                    <div className={styles.badge}><p>1</p><h4>Recommended</h4></div>
                    <div className={styles.actual_details}>
                        <h3>Video Commercials</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae quos veritatis quae.ipsum dolor sit amet consectetur adipisicing elit. Vitae quos veritatis quaeipsum dolor sit amet consectetur adipisicing elit. Vitae quos veritatis quae </p>
                        <button>Get Started</button>
                    </div>
                </div>
                <div className={styles.top_service_video_box}>VIDEO</div>
            </div>
            <div className={styles.No2_3}>
                
                <div className={styles.No2}>
                    <div className={styles.img_No}>
                        <p>2</p>
                        <img src="" alt="" />
                    </div>
                    <div className={styles.details_cta}>
                        <h3>Graphics Designing</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, quidem commodi! Architecto facere voluptas quisquam amet, doloribus explicabo ullam perspiciatis.</p>
                        <button>Get Started</button>
                    </div>
                </div>
                <div className={styles.No3}>
                <div className={styles.img_No}>
                        <p>3</p>
                        <img src="" alt="" />
                    </div>
                    <div className={styles.details_cta}>
                        <h3>Web Development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, quidem commodi! Architecto facere voluptas quisquam amet, doloribus explicabo ullam perspiciatis.</p>
                        <button>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopPicked