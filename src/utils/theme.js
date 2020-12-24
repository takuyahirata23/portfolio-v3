import { createMuiTheme } from '@material-ui/core'

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      contrastText: '#FFFFFF',
      main: '#5BC0BE',
      light: '#3A506B',
      dark: '#1C2541',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#5BC0BE',
    },
    background: {
      default: '#0B132B',
    },
  },
  typography: {
    fontFamily: ['Cormorant Garamond', 'serif'].join(', '),
  },
})
