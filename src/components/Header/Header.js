import Link from 'next/link'
import { useState } from 'react'
import { Box, Drawer, IconButton, Typography } from '@material-ui/core'
import { Menu, Close } from '@material-ui/icons'
import { ROUTES } from '../../utils/constants'
import useStyles from './useStyles'
import { Logo } from '../../elements'

const NavLink = ({ LABEL, URL }) => (
  <li key={LABEL}>
    <Link href={URL}>
      <a>{LABEL}</a>
    </Link>
  </li>
)

const links = Object.values(ROUTES)

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(cur => !cur)
  const cls = useStyles()

  return (
    <Box
      component="header"
      display="flex"
      justifyContent="space-between"
      p={[2, 2, 4]}
      className={cls.header}
    >
      <Logo />
      <IconButton onClick={toggle}>
        <Menu />
      </IconButton>
      <Drawer anchor="right" open={isOpen}>
        <IconButton onClick={toggle}>
          <Close />
        </IconButton>
        <nav>
          <ul>{links.map(NavLink)}</ul>
        </nav>
      </Drawer>
    </Box>
  )
}
