import { makeStyles } from '@material-ui/core'
import { O } from '../../utils/types'

export default makeStyles(({ palette, breakpoints }) => ({
  root: {
    backgroundColor: palette.background.default,
    color: palette.text.primary,
  },
  container: ({ withHeader }: O) => ({
    width: '1200px',
    maxWidth: '90vw',
    margin: '0 auto',
    marginTop: withHeader ? '112px' : 0,
    [breakpoints.down('sm')]: {
      marginTop: withHeader ? '80px' : 0,
    },
  }),
}))
