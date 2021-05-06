import React from 'react'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core'
import { darkTheme, lightTheme } from '../../utils/theme'
import { O } from '../../utils/types'

type Props = {
  children: React.ReactNode
}

type Theme = 'dark' | 'light'

const themes = { dark: darkTheme, light: lightTheme }

const getTheme = (theme: Theme): any => themes[theme]

export const ThemeContext = React.createContext<O>({})

export default function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = React.useState<Theme>('dark')

  const toggleTheme = () =>
    setTheme(theme => (theme === 'dark' ? 'light' : 'dark'))

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MuiThemeProvider theme={getTheme(theme)}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  )
}
