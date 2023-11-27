import React, {useState} from 'react';
import styles from "./styles/top_picked.module.css";
import { AiFillStar } from 'react-icons/ai';

const TopPicked = () => {
    const [top_services] = useState([
        {id: 1, nos: "Commercial Videos",img: "", short_descrip: "Video Advertisement", descrip: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores mollitia amet tempora facere iusto! Ab officiis voluptates perspiciatis explicabo eligendi perferendis dicta temporibus enim labore."},
        {id: 2, nos: "Graphics Designing",img: "", short_descrip: "Poster Adverts and more", descrip: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores mollitia amet tempora facere iusto! Ab officiis voluptates perspiciatis explicabo eligendi perferendis dicta temporibus enim labore."},
        {id: 3, nos: "Web Development",img: "Design & Development", short_descrip: "", descrip: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores mollitia amet tempora facere iusto! Ab officiis voluptates perspiciatis explicabo eligendi perferendis dicta temporibus enim labore."},
        // {id: 4, nos: "Social Media Management",img: "", short_descrip: "Facebook, Instagram, X", descrip: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores mollitia amet tempora facere iusto! Ab officiis voluptates perspiciatis explicabo eligendi perferendis dicta temporibus enim labore."},
    ])
  return (
    <div className={styles.top_picked_container}>
        <h2 className={styles.top_picked_title}>Our Top Picked Services</h2>
        <div className={styles.top_services}>
            {top_services.map((topie) => (
                <div className={styles.top_service}>
                    <div className={styles.top_title_box}>
                        <div className={styles.top_service_num}>{topie.id}</div>
                        <div className={styles.stars}>{Array(5).fill(1).map(() => (<AiFillStar size={25} />))}</div>
                        <p className={styles.nos}>{topie.nos}</p>
                    </div>
                    <div className={styles.bottom_details}>
                        <div className={styles.top_service_description}>
                            <div>
                                <p>{topie.short_descrip}</p>
                                <p>{topie.descrip}</p>
                            </div>
                        </div>
                        <button>EXPLORE OUR PREVIOUS WORK</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TopPicked