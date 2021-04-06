import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles(({ breakpoints, spacing }) => ({
  buttonWrapper: {
    margin: '0 auto',
    marginTop: spacing(2),
    width: '80%',
    [breakpoints.up('sm')]: {
      width: '50%',
    },
    [breakpoints.up('sm')]: {
      width: '40%',
    },
  },
}))
