import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles(({ breakpoints, spacing }) => ({
  formWrapper: {
    margin: '0 auto',
    marginTop: spacing(5),
    [breakpoints.up('sm')]: {
      width: '90%',
    },
    [breakpoints.up('md')]: {
      width: '65%',
      marginTop: spacing(10),
    },
    [breakpoints.up('lg')]: {
      marginTop: spacing(15),
    },
  },
}))
