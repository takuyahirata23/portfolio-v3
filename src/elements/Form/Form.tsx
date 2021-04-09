import React from 'react'
import { Button, Box, Grid } from '@material-ui/core'
import useStyles from './useStyles'

type Props = {
  children: React.ReactNode
  onSubmit: (e: React.SyntheticEvent) => void
  buttonText?: string
}

export default function Form({ buttonText, children, onSubmit }: Props) {
  const cls = useStyles()

  return (
    <Grid container component="form" onSubmit={onSubmit} spacing={1}>
      {children}
      <Grid item xs={12}>
        <Box className={cls.buttonWrapper}>
          <Button type="submit" variant="outlined" color="secondary" fullWidth>
            {buttonText}
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}

Form.defaultProps = {
  buttonText: 'Submit',
}
