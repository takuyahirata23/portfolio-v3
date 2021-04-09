import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles(({ breakpoints, palette, typography }) => ({
  alert: {
    padding: '1rem',
    [breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center',
      fotSize: '1rem',
    },
    [breakpoints.up('lg')]: {
      fotSize: '1.2rem',
    },
    [breakpoints.up('xl')]: {
      fotSize: '1.2rem',
    },
  },
  span: {
    fontWeight: typography.fontWeightRegular,
  },
}))
