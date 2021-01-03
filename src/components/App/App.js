import { Box, Typography, makeStyles } from '@material-ui/core'
import { Layout } from '../../elements'
import useStyles from './useStyles'

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
        {/* <Typography variant="body1" color="primary">
          compose(smile, sayHello, getTodo)(me)
        </Typography> */}
        <Typography variant="h1" className={cls.h1}>
          Hello. I write code :)
        </Typography>
      </Box>
    </Layout>
  )
}
