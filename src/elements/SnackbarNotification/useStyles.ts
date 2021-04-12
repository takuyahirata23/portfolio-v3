import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles(({ breakpoints, palette, typography }) => ({
  alert: {
    padding: '1rem',
    [breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '1rem',
    },
    [breakpoints.up('lg')]: {
      fontSize: '1.2rem',
    },
    [breakpoints.up('xl')]: {
      fontSize: '1.2rem',
    },
  },
  span: {
    fontWeight: typography.fontWeightRegular,
  },
}))
