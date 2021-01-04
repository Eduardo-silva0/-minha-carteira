import Head from 'next/head'
// import '../styles/globals'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Minha Carteira</title>
        <link rel="icon" href="./assets/logo.svg" />
      </Head>
      <Component {...pageProps} />

    </>
  )
}

export default MyApp
