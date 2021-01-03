import { useState } from 'react'
import { Box, Drawer, IconButton } from '@material-ui/core'
import { Menu, Close } from '@material-ui/icons'
import { ROUTES } from '../../utils/constants'
import { NavLink } from '../../elements'
import { withList } from '../../hoc'
import useStyles from './useStyles'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(cur => !cur)
  const cls = useStyles()

  return (
    <>
      <IconButton onClick={toggle}>
        <Menu />
      </IconButton>
      <Drawer anchor="right" open={isOpen}>
        <Box
          display="flex"
          flexDirection="column"
          p={2}
          className={cls.wrapper}
        >
          <IconButton onClick={toggle} className={cls.closeBtn}>
            <Close />
          </IconButton>
          <nav>
            <ul>{Object.values(ROUTES).map(withList(NavLink))}</ul>
          </nav>
        </Box>
      </Drawer>
    </>
  )
}
