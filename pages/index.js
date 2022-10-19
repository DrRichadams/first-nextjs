import { useEffect, useState } from "react"
import ComingSoon from "../components/home-page/coming-soon"
import classes from "./home.module.css"

export default function HomePage(props) {
  const [ days, setDays ] = useState(0)
  const [ hours, setHours ] = useState(0)
  const [ minutes, setMinutes ] = useState(0)
  const [ seconds, setSeconds ] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    const target = new Date("11/20/2022 10:00:00")

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      setDays(d)

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      setHours(h)

      const m = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      )
      setMinutes(m)

      const s = Math.floor(
        (difference % (1000 * 60 )) / (1000)
      )
      setSeconds(s)

    }, (1000));

    return () => clearInterval(interval)

  }, [])

  return (
    <div className={classes.homeBox}>
      {/* <h1>Lufa Media Digital Marketing Agency</h1> */}
      <h3>COMING SOON</h3>
      {/* <ComingSoon days={30} hours={15} minutes={30} seconds={10} /> */}
      <ComingSoon days={days} hours={hours} minutes={minutes} seconds={seconds} />
      <p>
        <span className={classes.lufaspan}>Lufa Media</span> is only days away from its official launch.
        If you want to be updated on the details of the launch,
        kindly leave your email below.
      </p>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.form}>
          <input type="email" placeholder="Email address" />
          <button>Submit</button>
        </div>
        <p>
          We take privacy very serious at Lufa media. Your email will never end up in the hands of any
          third party or sold to any organisation.
        </p>
      </form>
    </div>
  )
}