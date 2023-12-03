import '@/styles/globals.css'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import CartAlert from '@/Components/CartAlert'
import Drawer from '@/Components/Drawer'
import { Provider } from 'react-redux';
import store from '@/State/store';
import { SessionProvider } from "next-auth/react"
import { useState } from 'react'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [isDrawerVisible, setisDrawerVisible] = useState(false)
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <CartAlert />
        <Navbar isDrawerVisible={isDrawerVisible} setisDrawerVisible={setisDrawerVisible}/>
        <Drawer isDrawerVisible={isDrawerVisible} setisDrawerVisible={setisDrawerVisible}/>
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </SessionProvider>
  )
}
