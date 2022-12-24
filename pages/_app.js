import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import store from '../redux Store/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  return <>
  <Provider store={store}>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </Provider>
  </>
}

export default MyApp
