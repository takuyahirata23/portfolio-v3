import { useEffect } from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core'
import { darkTheme } from '../utils/theme'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: any) {
  useEffect(() => {
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
      <ThemeProvider theme={darkTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
