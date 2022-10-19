import '../styles/globals.css';
import Layout from '../components/layout/layout';
import classes from "./home.module.css";
import WarningModal from '../components/modals/warning-modal';

function MyApp({ Component, pageProps }) {
  return (
      <div>
        <WarningModal>
          <h1>HELLO</h1>
        </WarningModal>
        <nav className={classes.nav}>
            <img src="/images/onDark.png" alt="Logo" />
        </nav>
        <Component {...pageProps} />
      </div>
  )
}

export default MyApp
