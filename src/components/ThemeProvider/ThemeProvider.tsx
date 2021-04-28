import React from 'react'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core'
import { darkTheme, lightTheme } from '../../utils/theme'

const getTheme = (theme: 'dark' | 'light') =>
  theme === 'dark' ? darkTheme : lightTheme

type Props = {
  children: React.ReactNode
}

export type ThemeContext = {
  theme: 'dark' | 'light'
  toggleTheme: () => void
}

export const ThemeContext = React.createContext<{ [key: string]: any }>()

export default function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = React.useState('dark')
  const toggleTheme = () =>
    setTheme(theme => (theme === 'dark' ? 'light' : 'dark'))

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MuiThemeProvider theme={getTheme(theme)}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  )
}
