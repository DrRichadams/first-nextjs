// import ComingSoon from "../components/home-page/coming-soon"
import classes from "./home.module.css"

export default function HomePage(props) {
  return (
    <div className={classes.homeBox}>
      <h1>Lufa Media Digital Marketing Agency</h1>
      <h3>COMING SOON</h3>
      {/* <ComingSoon days={30} hours={15} minutes={30} seconds={10} /> */}
      <p>
        Only 30 days left to the official launch of
        Lufa Media Digital Marketing Agency.
        If you want to be updated on the details of the launch,
        kindly leave your email below.
      </p>
      <form className={classes.form}>
        <input type="email" placeholder="Email address" />
        <button>Submit</button>
        <p>
          We take privacy very serious at Lufa media. Your email will never end up in the hands of any
          third party of sold to any organisation.
        </p>
      </form>
    </div>
  )
}