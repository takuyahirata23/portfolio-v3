import { Box, Typography } from '@material-ui/core'
import useStyles from './useStyles'

export default function Banner() {
  const cls = useStyles()

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      className={cls.wrapper}
    >
      <Typography
        variant="body1"
        color="primary"
        gutterBottom
        className={cls.body1}
      >
        compose(smile, sayHello, getTodo)(Takuya)
      </Typography>
      <Typography variant="h1" className={cls.h1}>
        Hello. I write code :)
      </Typography>
    </Box>
  )
}
