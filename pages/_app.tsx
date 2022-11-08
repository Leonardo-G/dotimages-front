import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { AuthProvider } from '../context/auth/AuthProvider'
import { UIProvider } from '../context/UI/UIProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
    <UIProvider>
      <AuthProvider>
        <Component {...pageProps} /> 
      </AuthProvider>
    </UIProvider>
  )
}

export default MyApp
