import React from 'react'
import { TextField, Grid, Box } from '@material-ui/core'
import { toLabel } from '../../utils/functions'

type GridItemProps = {
  [key: string]: any
}

type Props = {
  name: string
  //value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  fromFields: any
  type?: string
  label?: string
  GridItemProps?: GridItemProps
  rows?: number
  multiline?: boolean
  required?: boolean
  //error?: boolean
  //helperText?: string
}

export default function Field({
  name,
  type,
  fromFields,
  //value,
  label,
  onChange,
  GridItemProps,
  rows,
  multiline,
  required,
}: //helperText,
//error,
Props) {
  return (
    <Grid item xs={12} {...GridItemProps}>
      <TextField
        id={name}
        label={label || toLabel(name)}
        name={name}
        {...fromFields}
        //value={value}
        onChange={onChange}
        type={type}
        //error={error}
        //helperText={helperText}
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
