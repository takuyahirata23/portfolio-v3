import { Alert } from '@material-ui/lab'
import { Snackbar } from '@material-ui/core'
import useStyles from './useStyles'

type Props = {
  open: boolean
  message: string
  status: 'success' | 'error'
}

export default function SnackbarNotification({ open, message, status }: Props) {
  const cls = useStyles()
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert color={status} severity={status} className={cls.alert}>
        <span className={cls.span}>{message}</span>
      </Alert>
    </Snackbar>
  )
}
