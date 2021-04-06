import React from 'react'
import { Box, Typography, IconButton } from '@material-ui/core'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import { getHeight, scroll, classNames } from '../../utils/functions'
import useStyles from './useStyles'

export default function Banner() {
  const [height, setHeight] = React.useState<number>(0)

  const updateHeight = () => setHeight(getHeight(window))

  React.useEffect(() => {
    window.addEventListener('resize', updateHeight)
    return () => {
      window.removeEventListener('resize', updateHeight)
    }
  }, [])

  React.useEffect(() => {
    updateHeight()
  }, [])

  const cls = useStyles({ height })

  return (
    <Box className={classNames(cls.flex, cls.wrapper)}>
      <Box className={classNames(cls.flex, cls.underlay)}>
        <Typography variant="body2">HELLO</Typography>
      </Box>
      <Box className={classNames(cls.flex, cls.profileWrapper)}>
        <div className={cls.h1Wrapper}>
          <Typography variant="h1" color="textPrimary">
            I write code
          </Typography>
          <Box className={classNames(cls.flex, cls.arrow)}>
            <IconButton onClick={scroll(height)}>
              <KeyboardArrowDownIcon fontSize="large" />
            </IconButton>
          </Box>
        </div>
      </Box>
    </Box>
  )
}
