import { Box } from '@material-ui/core'
import useStyles from './useStyles'
import { Navigation } from '..'
import { Logo } from '../../elements'

export default function Header() {
  const cls = useStyles()

  return (
    <Box
      component="header"
      display="flex"
      justifyContent="space-between"
      p={[2, 2, 4]}
      className={cls.header}
      bgcolor="background.default"
    >
      <Logo />
      <Navigation />
    </Box>
  )
}
