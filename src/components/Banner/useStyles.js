import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles(({ breakpoints }) => ({
  wrapper: {
    minHeight: '100vh',
  },
  h1: {
    fontSize: '4rem',
    [breakpoints.down('sm')]: {
      fontSize: '3rem',
    },
    [breakpoints.down('xs')]: {
      fontSize: '2.3rem',
    },
  },
  body1: {
    fontSize: '1.4rem',
    [breakpoints.down('sm')]: {
      fontSize: '1.2rem',
    },
    [breakpoints.down('xs')]: {
      fontSize: '.95rem',
    },
  },
}))
