import { Box, makeStyles } from '@material-ui/core'
import { Header } from '..'

const useStyles = makeStyles(({ palette }) => ({
  root: {
    backgroundColor: palette.background.default,
    minHeight: '100vh',
    color: palette.text.primary,
  },
}))

export default function App() {
  const cls = useStyles()

  return (
    <Box className={cls.root}>
      <Header />
    </Box>
  )
}
