import { Box, Typography, makeStyles } from '@material-ui/core'
import { Layout } from '../../elements'

const useStyles = makeStyles(({ palette }) => ({
  wrapper: {
    minHeight: '100vh',
  },
}))

export default function App() {
  const cls = useStyles()

  return (
    <Layout>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        className={cls.wrapper}
      >
        <Typography variant="body1" color="primary">
          compose(smile, sayHello, getTodo)(me)
        </Typography>
        <Typography variant="h2">Hello. I write code :)</Typography>
      </Box>
    </Layout>
  )
}
