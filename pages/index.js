import ComingSoon from "../components/home-page/coming-soon"
import classes from "./home.module.css"

export default function HomePage(props) {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className={classes.homeBox}>
      {/* <h1>Lufa Media Digital Marketing Agency</h1> */}
      <h3>COMING SOON</h3>
      {/* <ComingSoon days={30} hours={15} minutes={30} seconds={10} /> */}
      <ComingSoon days={30} hours={20} minutes={15} seconds={10} />
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