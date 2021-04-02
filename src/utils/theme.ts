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
    fontFamily: ['Roboto', 'sans-serif'].join(', '),
  },
})

darkTheme.typography.h1 = {
  fontSize: '2rem',
  fontFamily: ['Roboto', 'sans-serif'].join(', '),
  [darkTheme.breakpoints.up('sm')]: {
    fontSize: '3rem',
  },
  [darkTheme.breakpoints.up('md')]: {
    fontSize: '3.5rem',
    fontWeight: darkTheme.typography.fontWeightLight,
  },
  [darkTheme.breakpoints.up('lg')]: {
    fontSize: '4rem',
  },
}

darkTheme.typography.h2 = {
  fontSize: '3.3rem',
  fontFamily: ['Roboto', 'sans-serif'].join(', '),
  [darkTheme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
  },
  [darkTheme.breakpoints.down('xs')]: {
    fontSize: '2rem',
  },
}

darkTheme.typography.h3 = {
  fontSize: '1.8rem',
  fontFamily: ['Roboto', 'sans-serif'].join(', '),
  [darkTheme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
  [darkTheme.breakpoints.down('xs')]: {
    fontSize: '1.2rem',
  },
}

darkTheme.typography.body1 = {
  fontSize: '1.2rem',
  fontFamily: ['Roboto', 'sans-serif'].join(', '),
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

darkTheme.typography.body2 = {
  fontFamily: ['Roboto', 'sans-serif'].join(', '),
  color: darkTheme.palette.primary.light,
  fontWeight: darkTheme.typography.fontWeightBold,
  display: 'none',
  opacity: 0.2,
  [darkTheme.breakpoints.up('md')]: {
    display: 'block',
    fontSize: '14rem',
  },
  [darkTheme.breakpoints.up('lg')]: {
    fontSize: '17rem',
  },
}
