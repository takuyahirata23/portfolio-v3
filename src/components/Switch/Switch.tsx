import React from 'react'
import { Box, Switch as MuiSwitch } from '@material-ui/core'

type Props = {
  updater: () => void
  Left?: React.ReactNode
  Right?: React.ReactNode
  defaultValue?: boolean
}

export default function Switch({ Left, Right, defaultValue, updater }: Props) {
  const [state, setState] = React.useState(defaultValue)
  const handleChange = () => setState(cur => !cur)
  let ref = React.useRef(false)

  React.useEffect(() => {
    if (!ref.current) {
      ref.current = true
    } else {
      updater()
    }
  }, [state])

  return (
    <Box display="flex" alignItems="center">
      {Left && Left}
      <MuiSwitch checked={state} onChange={handleChange} />
      {Right && Right}
    </Box>
  )
}

Switch.defaultValue = {
  defaultValue: false,
}
