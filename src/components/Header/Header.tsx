import React from 'react'
import { Box, Switch } from '@material-ui/core'
import { Brightness4, WbIncandescent } from '@material-ui/icons'
import { Logo } from '../../elements'
import { isScrollYZero } from '../../utils/functions'
import useStyles from './useStyles'

type Props = {
  toggleTheme: () => void
}

export default function Header({ toggleTheme }: Props) {
  const [isTop, setIsTop] = React.useState(true)
  const [checked, setChecked] = React.useState(false)
  const cls = useStyles({ isTop })

  const handleToggle = () => setChecked(cur => !cur)
  let ref = React.useRef(false)

  React.useEffect(() => {
    if (!ref.current) {
      ref.current = true
    } else {
      toggleTheme()
    }
  }, [checked])

  React.useEffect(() => {
    //@ts-ignore
    const handleScroll = () => setIsTop(isScrollYZero(window))

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Box
      component="header"
      p={[2, 2, 4]}
      className={cls.header}
      bgcolor="background.default"
    >
      <Logo />
      <Box display="flex" alignItems="center">
        <Brightness4 />
        <Switch checked={checked} onChange={handleToggle} />
        <WbIncandescent />
      </Box>
    </Box>
  )
}
