import { makeStyles } from '@material-ui/core'

export default makeStyles(({ palette, breakpoints }) => ({
  root: {
    backgroundColor: palette.background.default,
    color: palette.text.primary,
  },
  container: ({ withHeader }) => ({
    width: '1200px',
    maxWidth: '90vw',
    margin: '0 auto',
    paddingTop: withHeader ? '112px' : 0,
    [breakpoints.down('sm')]: {
      paddingTop: withHeader ? '80px' : 0,
    },
  }),
}))
