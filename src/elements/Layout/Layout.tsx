import { Box } from '@material-ui/core'
import { Header } from '../../components'
import useStyles from './useStyles'

interface Props {
  children: React.ReactNode
  withHeader?: boolean
  py?: boolean
  toggleTheme: () => void
}

export default function Layout({
  children,
  withHeader = false,
  py = false,
  toggleTheme,
}: Props) {
  const cls = useStyles({ withHeader })
  const padding = py ? [3, 5, 8, 10] : []
  return (
    <Box className={cls.root}>
      <Box className={cls.container} py={padding}>
        <Header toggleTheme={toggleTheme} />
        {children}
      </Box>
    </Box>
  )
}
