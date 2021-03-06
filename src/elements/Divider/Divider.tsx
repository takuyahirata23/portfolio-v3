import { Divider as MaterialDivider } from '@material-ui/core'
import useStyles from './useStyles'

export default function Divider() {
  const cls = useStyles()
  return <MaterialDivider classes={cls} />
}
