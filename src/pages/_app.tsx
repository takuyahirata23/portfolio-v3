import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from '../components'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: any) {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      //@ts-ignore
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Takuya Hirata</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
