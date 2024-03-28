import React, { useState } from "react"
import styles from "../styles/Home.module.css"
import testimonials from "../data/testimonials.json"
import top_services from "../data/top_services.json"
import common_questions from "../data/common_questions.json"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function HomePage(props) {
  const [ openAns, setOpenAns ] = useState(1)
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
        <section className={styles.testimonials_container}>
          <h3 className={styles.testimonial_title}>TESTIMONIALS</h3>
          <p className={styles.testimonial_sub_title}>The quality of our work is unmatched, here’s what some of our clients have to say about our quality services</p>
          <div className={styles.testimonials_container}>
              <Swiper
                 modules={[Navigation, Pagination, Scrollbar, A11y]}
                //  spaceBetween={50}
                 slidesPerView={1}
                 navigation
                 pagination={{ clickable: true }}
                 className={styles.swiper_container}
              >{
                testimonials.map((item) => {
                  return (
                    <SwiperSlide className={styles.testimonial_box} key={item.id}>
                    <div className={styles.user_info_box}>
                      <div className={styles.user_picture}>
                        <img src={item.user_pic} alt="" />
                      </div>
                      <div className={styles.user_names}>
                          <p className={styles.testi_name}>{item.username}</p>
                          <p className={styles.testi_positions}>{item.position}</p>
                      </div>
                    </div>
                    <p className={styles.testi_story}>{item.testimonial}</p>
                    <div className={styles.testi_controls_container}></div>
                  </SwiperSlide>
                  )
                })
              }
              </Swiper>
          </div>
        </section>
        <section className={styles.common_questions_container}>
            <div className={styles.common_questions_titles}>
              <h4>Common Questions</h4>
              <p>Getting started is fast and easy</p>
            </div>
            <div className={styles.common_questions_listing}>
              {
                common_questions.map((item) => (
                  <div key={item.id} className={styles.common_question_box}>
                    <div className={styles.question_box}>
                      <p>{item.question}</p>
                      <button onClick={() => setOpenAns(item.id)}>
                        {
                          openAns == item.id ?
                          <img src="/icons/down_arrow2.png" alt="" />:
                          <img src="/icons/arrow_right.png" alt="" />
                        }
                      </button>
                    </div>
                    { openAns == item.id ? <p className={styles.answer_box}>{item.answer}</p> : null }
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