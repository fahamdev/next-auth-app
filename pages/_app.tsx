import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../components/Navbar.css'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return <> 
    <Navbar />
    <Component {...pageProps} />
  </>
}

export default MyApp
