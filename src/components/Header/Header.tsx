import React from 'react'
import { Box } from '@material-ui/core'
import { Brightness4, WbIncandescent } from '@material-ui/icons'
import { Logo } from '../../elements'
import { Switch } from '../../components'
import { isScrollYZero } from '../../utils/functions'
import { ThemeContext } from '../ThemeProvider/ThemeProvider'
import useStyles from './useStyles'

export default function Header() {
  const { theme, toggleTheme } = React.useContext<any>(ThemeContext)
  const [isTop, setIsTop] = React.useState(true)
  const cls = useStyles({ isTop })

  React.useEffect(() => {
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
      <Switch
        defaultValue={theme !== 'dark'}
        updater={toggleTheme}
        Left={<Brightness4 />}
        Right={<WbIncandescent />}
      />
    </Box>
  )
}
