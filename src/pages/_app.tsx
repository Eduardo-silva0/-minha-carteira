import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/GlobalStyles'

import dark from '../styles/themes/dark'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={dark}>
      <Head>
        <title>Minha Carteira</title>
        <link rel="icon" href="./assets/logo.svg" />
      </Head>

      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
