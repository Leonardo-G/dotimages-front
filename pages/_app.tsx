import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { AuthProvider } from '../context/auth/AuthProvider'
import { UIProvider } from '../context/UI/UIProvider'
import { FavoriteProvider } from '../context/favorites/FavoriteProvider'
import { SavedContext } from '../context/saved/SavedContext'
import { SavedProvider } from '../context/saved/SavedProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
    <UIProvider>
      <AuthProvider>
        <FavoriteProvider>
          <SavedProvider>
            <Component {...pageProps} />
          </SavedProvider>
        </FavoriteProvider>
      </AuthProvider>
    </UIProvider>
  )
}

export default MyApp
