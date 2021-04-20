import React from 'react'
import { Button, Box, Grid, LinearProgress } from '@material-ui/core'
import SnackbarNotification from '../SnackbarNotification'
import useStyles from './useStyles'

type Props = {
  children: React.ReactNode
  onSubmit: any
  buttonText?: string
  status: 'fetching' | 'success' | 'error' | 'idle'
  message: string
}

export default function Form({
  buttonText,
  children,
  onSubmit,
  status,
  message,
}: Props) {
  const cls = useStyles()

  return (
    <>
      {status === 'fetching' && (
        <LinearProgress
          style={{ position: 'fixed', top: 0, left: 0, right: 0 }}
        />
      )}
      {(status === 'error' || status === 'success') && (
        <SnackbarNotification open message={message} status={status} />
      )}
      <Grid container component="form" onSubmit={onSubmit} spacing={1}>
        {children}
        <Grid item xs={12}>
          <Box className={cls.buttonWrapper}>
            <Button
              type="submit"
              variant="outlined"
              color="secondary"
              fullWidth
              disabled={status === 'fetching'}
            >
              {buttonText}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

Form.defaultProps = {
  buttonText: 'Submit',
  showError: false,
  errorMessage: '',
}
