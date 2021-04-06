import React from 'react'
import { Button, Box, Grid } from '@material-ui/core'
import useStyles from './useStyles'

type Props = {
  children: React.ReactNode
  onSubmit: () => void
  buttonText?: string
}

export default function Form({ buttonText, children, onSubmit }: Props) {
  const cls = useStyles()

  return (
    <Grid container component="form" onSubmit={onSubmit} spacing={3}>
      {children}
      <Grid item xs={12}>
        <Box className={cls.buttonWrapper}>
          <Button variant="outlined" color="secondary" fullWidth>
            {buttonText}
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}

Form.defaultProps = {
  buttonText: 'Submit',
}
