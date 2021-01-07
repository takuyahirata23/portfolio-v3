import { useState, useLayoutEffect } from 'react'
import { Box, Typography } from '@material-ui/core'
import { updateHeightIO } from '../../utils/functions'
import useStyles from './useStyles'

export default function Banner() {
  const [height, setHeight] = useState(null)

  const updateHeight = updateHeightIO(setHeight)
  const handleResize = () => updateHeight.unsafePerformIO()

  useLayoutEffect(() => {
    handleResize()
  }, [])

  useLayoutEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
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
      <Typography variant="body1" color="primary" gutterBottom>
        compose(smile, sayHello, getTodo)(Takuya)
      </Typography>
      <Typography variant="h1">Hello. I write code :)</Typography>
    </Box>
  )
}
