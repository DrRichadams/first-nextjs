import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
      <div>
        <nav>
            {/* <img src="/images/onDark.png" alt="Logo" /> */}
        </nav>
        <Component {...pageProps} />
      </div>
  )
}

export default MyApp
