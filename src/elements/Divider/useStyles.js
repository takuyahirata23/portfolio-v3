import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles(({ breakpoints }) => ({
  root: {
    marginTop: '.2rem',
    marginBottom: '1.5rem',
    [breakpoints.down('sm')]: {
      marginBottom: '1rem',
    },
    [breakpoints.down('xs')]: {
      fontSize: '.8rem',
    },
  },
}))
