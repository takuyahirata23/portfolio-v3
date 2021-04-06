import React from 'react'
import { TextField, Grid } from '@material-ui/core'

type GridItemProps = {
  [key: string]: any
}

type Props = {
  id: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  label?: string
  GridItemProps?: GridItemProps
  rows?: number
  multiline?: boolean
}

export default function Field({
  id,
  name,
  type,
  value,
  label,
  onChange,
  GridItemProps,
  rows,
  multiline,
}: Props) {
  return (
    <Grid item xs={12} {...GridItemProps}>
      <TextField
        id={id}
        label={label || name}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        multiline={multiline}
        rows={rows}
        variant="outlined"
        fullWidth
      />
    </Grid>
  )
}

Field.defaultProps = {
  type: 'text',
  multiline: false,
  rows: 1,
}
