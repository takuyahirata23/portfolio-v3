import React from 'react'
import { TextField, Grid, Box } from '@material-ui/core'
import { toLabel } from '../../utils/functions'

type GridItemProps = {
  [key: string]: any
}

type Field = {
  value: string
  helperText: string
  error: boolean
}

type Props = {
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  fromFields: Field
  type?: string
  label?: string
  GridItemProps?: GridItemProps
  rows?: number
  multiline?: boolean
  required?: boolean
}

export default function Field({
  name,
  type,
  fromFields,
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
        id={name}
        label={label || toLabel(name)}
        name={name}
        {...fromFields}
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
  error: false,
  helperText: ' ',
}
