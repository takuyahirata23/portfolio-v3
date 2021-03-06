import { Box } from '@material-ui/core'
import { Header } from '../../components'
import useStyles from './useStyles'

interface Props {
  children: React.ReactNode
  withHeader?: boolean
  py?: number | number[]
}

export default function Layout({ children, withHeader = false, py }: Props) {
  const cls = useStyles({ withHeader })
  const padding = py ? [3, 5, 8, 10] : []
  return (
    <Box className={cls.root}>
      <Header />
      <Box className={cls.container} py={padding}>
        {children}
      </Box>
    </Box>
  )
}
