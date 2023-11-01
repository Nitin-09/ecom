import '@/styles/globals.css'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import CartAlert from '@/Components/CartAlert'
import { Provider } from 'react-redux';
import store from './State/store';

export default function App({ Component, pageProps }) {


  
  return (
    <Provider store={store}>
      <CartAlert/>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  )
}
