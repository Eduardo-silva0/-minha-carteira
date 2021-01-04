import Head from 'next/head'
import GlobalStyles from '../styles/GlobalStyles'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Minha Carteira</title>
        <link rel="icon" href="./assets/logo.svg" />
      </Head>

      <GlobalStyles />

      <Component {...pageProps} />


    </>
  )
}

export default MyApp
