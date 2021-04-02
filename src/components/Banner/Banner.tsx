import { useState, useLayoutEffect } from 'react'
import { Box, Typography, IconButton } from '@material-ui/core'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
// import { IconButton } from '../../elements'
import { getHeightIO } from '../../utils/functions'
import useStyles from './useStyles'

const joinClassNames = (...classNames) => classNames.join(' ')

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
    <Box className={joinClassNames(cls.flex, cls.wrapper)}>
      <Box className={joinClassNames(cls.flex, cls.underlay)}>
        <Typography variant="body2">HELLO</Typography>
      </Box>
      <Box className={joinClassNames(cls.flex, cls.profileWrapper)}>
        <div className={cls.h1Wrapper}>
          <Typography variant="h1" color="textPrimary">
            I write code
          </Typography>
          <Box className={joinClassNames(cls.flex, cls.arrow)}>
            <IconButton onClick={scroll}>
              <KeyboardArrowDownIcon fontSize="large" />
            </IconButton>
          </Box>
        </div>
      </Box>
    </Box>
  )
}
