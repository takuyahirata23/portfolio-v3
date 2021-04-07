import React from 'react'
import { TextField, Grid } from '@material-ui/core'
import { toLabel } from '../../utils/functions'

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
  required?: boolean
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
  required,
}: Props) {
  return (
    <Grid item xs={12} {...GridItemProps}>
      <TextField
        id={id}
        label={label || toLabel(name)}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        multiline={multiline}
        rows={rows}
        variant="outlined"
        fullWidth
        required={required}
      />
    </Grid>
  )
}

Field.defaultProps = {
  type: 'text',
  multiline: false,
  required: false,
  rows: 1,
}
