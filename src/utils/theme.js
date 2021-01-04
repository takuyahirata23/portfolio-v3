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

darkTheme.typography.h1 = {
  fontSize: '4rem',
  fontFamily: ['Cormorant Garamond', 'serif'].join(', '),
  [darkTheme.breakpoints.down('sm')]: {
    fontSize: '3rem',
  },
  [darkTheme.breakpoints.down('xs')]: {
    fontSize: '2.3rem',
  },
}

darkTheme.typography.body1 = {
  fontSize: '1.4rem',
  fontFamily: ['Cormorant Garamond', 'serif'].join(', '),
  [darkTheme.breakpoints.down('sm')]: {
    fontSize: '1.2rem',
  },
  [darkTheme.breakpoints.down('xs')]: {
    fontSize: '.95rem',
  },
}
