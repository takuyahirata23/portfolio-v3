import { makeStyles } from '@material-ui/core'

export default makeStyles(({ palette }) => ({
  root: {
    backgroundColor: palette.background.default,
    color: palette.text.primary,
  },
  container: {
    width: '1200px',
    maxWidth: '90vw',
    margin: '0 auto',
  },
}))
