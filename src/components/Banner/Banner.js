import { useState, useLayoutEffect } from 'react'
import { Box, Typography } from '@material-ui/core'
import { getHeightIO } from '../../utils/functions'
import useStyles from './useStyles'

export default function Banner() {
  const [height, setHeight] = useState(null)

  const updateHeight = () => setHeight(getHeightIO().unsafePerformIO())

  useLayoutEffect(() => {
    updateHeight()
  }, [])

  useLayoutEffect(() => {
    window.addEventListener('resize', updateHeight)
    return () => {
      window.removeEventListener('resize', updateHeight)
    }
  }, [])

  const cls = useStyles({ height })

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      className={cls.wrapper}
    >
      <Typography variant="body1" color="textSecondary" gutterBottom>
        compose(wave, sayHello, getTodo)(Takuya)
      </Typography>
      <Typography variant="h1" color="textPrimary">
        Hello. I write code 👋
      </Typography>
    </Box>
  )
}
