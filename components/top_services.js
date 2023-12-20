import React, {useState} from 'react';
import styles from "../components/styles/top_services.module.css";

const TopServices = () => {
    const [top_services] = useState([
        {id: 1, nos: "Commercial Videos",img: "video_commercial_picture.jpg", icon: "video_commercial_icon.png", short_descrip: "Video Advertisement", descrip: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis vitae tenetur reiciendis quis voluptates voluptatum aperiam natus quia"},
        {id: 2, nos: "Graphics Designing",img: "graphic_design_picture.jpg", icon: "graphic_design_icon.png", short_descrip: "Poster Adverts and more", descrip: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis vitae tenetur reiciendis quis voluptates voluptatum aperiam natus quia"},
        {id: 3, nos: "Web Development",img: "web_development_picture.jpg", icon: "web_development_icon.png", short_descrip: "Design & Development", descrip: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis vitae tenetur reiciendis quis voluptates voluptatum aperiam natus quia"},
        // {id: 4, nos: "Social Media Management",img: "", short_descrip: "Facebook, Instagram, X", descrip: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores mollitia amet tempora facere iusto! Ab officiis voluptates perspiciatis explicabo eligendi perferendis dicta temporibus enim labore."},
    ])
  return (
    <div className={styles.top_service_container}>
        <h3 className={styles.main_title}>Our top services</h3>
        <div className={styles.top_services_box}>
            {top_services.map(item => (
                <div className={styles.top_service}>
                    <div className={styles.number}>{item.id}</div>
                    <div className={styles.top_service_content_box}>
                        <img src={`/images/${item.img}`} className={styles.top_service_img} />
                        <div className={styles.cta_box}>
                            <img src={`/images/${item.icon}`} className={styles.top_service_icon} />
                            <button>Explore</button>
                        </div>
                        <div className={styles.titles}>
                            <h3>{item.nos}</h3>
                            <p>{item.descrip}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TopServices