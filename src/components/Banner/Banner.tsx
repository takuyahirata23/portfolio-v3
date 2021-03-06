import { useState, useLayoutEffect } from 'react'
import { Box, Typography } from '@material-ui/core'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import { IconButton } from '../../elements'
import { getHeightIO } from '../../utils/functions'
import useStyles from './useStyles'

export default function Banner() {
  const [height, setHeight] = useState<any>(undefined)

  const updateHeight = () => setHeight(getHeightIO(window)())
  const scroll = () =>
    window.scrollTo({
      top: height,
      behavior: 'smooth',
    })

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
      <Typography color="textSecondary" gutterBottom>
        compose(getTodo, wave, sayHello)(Takuya)
      </Typography>
      <Typography variant="h1" color="textPrimary">
        Hello👋 I write code
      </Typography>
      <IconButton onClick={scroll}>
        <KeyboardArrowDownIcon />
      </IconButton>
    </Box>
  )
}
