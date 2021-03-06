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
    divider: '#3A506B',
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

darkTheme.typography.h2 = {
  fontSize: '3.3rem',
  fontFamily: ['Cormorant Garamond', 'serif'].join(', '),
  [darkTheme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
  },
  [darkTheme.breakpoints.down('xs')]: {
    fontSize: '2rem',
  },
}

darkTheme.typography.h3 = {
  fontSize: '1.8rem',
  fontFamily: ['Cormorant Garamond', 'serif'].join(', '),
  [darkTheme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
  [darkTheme.breakpoints.down('xs')]: {
    fontSize: '1.2rem',
  },
}

darkTheme.typography.body1 = {
  fontSize: '1.2rem',
  maxWidth: '42rem',
  lineHeight: 1.8,
  [darkTheme.breakpoints.down('lg')]: {
    fontSize: '1.1rem',
  },
  [darkTheme.breakpoints.down('sm')]: {
    fontSize: '1.1rem',
  },
  [darkTheme.breakpoints.down('xs')]: {
    fontSize: '.9rem',
  },
}
