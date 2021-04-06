import React from 'react'
import { Box } from '@material-ui/core'
import useStyles from './useStyles'
import { Logo } from '../../elements'
import { getScrollY } from '../../utils/functions'

export default function Header() {
  const [isTop, setIsTop] = React.useState(true)
  const cls = useStyles({ isTop })

  React.useEffect(() => {
    const handleScroll = () => setIsTop(!Boolean(getScrollY(window)()))

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

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
    </Box>
  )
}
