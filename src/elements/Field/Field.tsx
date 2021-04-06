import { TextField, Grid } from '@material-ui/core'

type GridItemProps = {
  [key: string]: any
}

type Props = {
  id: string
  name: string
  value: string
  onChange: () => void
  type?: string
  label?: string
  GridItemProps?: GridItemProps
}

export default function Field({
  id,
  name,
  type,
  value,
  label,
  onChange,
  GridItemProps,
}: Props) {
  return (
    <Grid item {...GridItemProps}>
      <TextField
        id={id}
        label={label || name}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        variant="outlined"
      />
    </Grid>
  )
}

Field.defaultProps = {
  type: 'text',
}
