import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { AuthProvider } from '../context/auth/AuthProvider'
import { UIProvider } from '../context/UI/UIProvider'
import { FavoriteProvider } from '../context/favorites/FavoriteProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
    <UIProvider>
      <AuthProvider>
        <FavoriteProvider>
          <Component {...pageProps} />
        </FavoriteProvider>
      </AuthProvider>
    </UIProvider>
  )
}

export default MyApp
