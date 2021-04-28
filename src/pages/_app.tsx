import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core'
import { darkTheme, lightTheme } from '../utils/theme'
import '../styles/globals.css'

const getTheme = (theme: 'dark' | 'light') =>
  theme === 'dark' ? darkTheme : lightTheme

function MyApp({ Component, pageProps }: any) {
  const [theme, setTheme] = React.useState<'dark' | 'light'>('light')

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
      <ThemeProvider theme={getTheme(theme)}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
