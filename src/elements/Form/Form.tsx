import React from 'react'
import { Grid } from '@material-ui/core'

type Props = {
  children: React.ReactNode
  onSubmit: () => void
}

export default function Form({ children, onSubmit }: Props) {
  return (
    <Grid container component="form" onSubmit={onSubmit}>
      {children}
    </Grid>
  )
}
