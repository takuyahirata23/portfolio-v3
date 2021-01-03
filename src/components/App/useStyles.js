import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles(({ breakpoints }) => ({
  wrapper: {
    minHeight: '100vh',
  },
  h1: {
    fontSize: '4rem',
    [breakpoints.down('xs')]: {
      fontSize: '2.5rem',
    },
  },
}))
