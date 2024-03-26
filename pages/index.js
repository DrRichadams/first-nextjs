import React, { useState } from "react"
import styles from "../styles/Home.module.css"
import testimonials from "../data/testimonials.json"

export default function HomePage(props) {

  const [ top_services ] = useState([
    { id: 1, name: "Commercial Videos", icon: "/icons/Commercial_Videos.png" },
    { id: 2, name: "Graphic Designing", icon: "/icons/Graphics_Designing.png" },
    { id: 3, name: "Web Development", icon: "/icons/Web_development.png" },
    { id: 4, name: "UI / UX Design", icon: "/icons/UX_UI_Design.png" },
    { id: 5, name: "Social Media Management", icon: "/icons/Social_media_managing.png" },
    { id: 6, name: "SEO", icon: "/icons/SEO.png" },
  ])

  // console.log(testimonials)

  return (
    <div>
      <nav className={styles.navigation_container}>
        <div className={styles.logo_box}>LUFA</div>
        <div className={styles.cta_menu_container}>
          <button>Get Started</button>
          <img src="./icons/menu1.png" alt="" />
        </div>
      </nav>
      <header className={styles.header_container}>
        <h1 className={styles.main_header_text}>Helping your business grow</h1>
        <div className={styles.promo_box}>
          <p>Start from as little as $10</p>
        </div>
        <div className={styles.main_header_cta_box}>
          <button><p>Get Started</p><img src="/icons/get_started.png" alt="" /></button>
          <p className={styles.cta_message}>There is always a plan for you</p>
        </div>
        <p className={styles.header_story}>
          We help businesses harness the power of 
          online advertisement through video commercials,
          art/graphical design, social media management,
          and more. Get in touch with us and claim your
          territory in the cyber space.
        </p>
        <div className={styles.proceed_arrow_container}>
          <img src="/icons/down_arrow.png" alt="" />
        </div>
      </header>
      <main className={styles.main_container}>
        <section className={styles.top_services_container}>
            <h2>OUR TOP PICKED SERVICES</h2>
            <p className={styles.top_services_story}>Our clients have seen massive growth in their
                businesses through the utilization of these services.
                We are confident that you will also experience similar
                growth by utilizing them.
            </p>
            <div className={styles.top_services_listing_container}>
              {top_services.map((item) => (
                <div className={styles.top_service_box}> 
                  <img src={item.icon} alt="" className={styles.top_service_icon} />
                  <p>{item.name}</p>
                  <img src="/icons/dotted_arrow_right.png" alt="" className={styles.top_service_arrow} />
                </div>
              ))}
            </div>
            <div className={styles.top_services_more_btn_container}>
              <button><p>Explore more services</p><img src="/icons/get_started.png" alt="" /></button>
            </div>
        </section>
        <section>
          <h3>TESTIMONIALS</h3>
          <p>The quality of our work is unmatched, here’s what some of our clients have to say about our quality services</p>
          <div className={styles.testimonials_container}>
              {
                testimonials.map((item) => (
                  <div className={styles.testimonial_box}>
                    <div className={styles.user_info_box}>
                      <div className={styles.user_picture}><img src={item.user_pic} alt="" /></div>
                      <div className={styles.user_names}>
                          <p>{item.username}</p>
                          <p>{item.position}</p>
                      </div>
                    </div>
                    <p>{item.testimonial}</p>
                    <div className={styles.testi_controls_container}></div>
                  </div>
                ))
              }
          </div>
        </section>
      </main>
      <footer className={styles.footer_container}>FOOTER</footer>
    </div>
  )
}