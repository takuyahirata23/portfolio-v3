import React from 'react'
import { Button, Box, Grid, LinearProgress } from '@material-ui/core'
import SnackbarNotification from '../SnackbarNotification'
import useStyles from './useStyles'

type Props = {
  children: React.ReactNode
  onSubmit: (e: React.SyntheticEvent) => void
  buttonText?: string
  isLoading?: boolean
  showSnackbar: boolean
  message: string
  status: 'success' | 'error'
}

export default function Form({
  buttonText,
  children,
  onSubmit,
  showSnackbar,
  message,
  status,
  isLoading,
}: Props) {
  const cls = useStyles()

  return (
    <>
      {isLoading && (
        <LinearProgress
          style={{ position: 'fixed', top: 0, left: 0, right: 0 }}
        />
      )}
      <SnackbarNotification
        open={showSnackbar}
        message={message}
        status={status}
      />
      <Grid container component="form" onSubmit={onSubmit} spacing={1}>
        {children}
        <Grid item xs={12}>
          <Box className={cls.buttonWrapper}>
            <Button
              type="submit"
              variant="outlined"
              color="secondary"
              fullWidth
              disabled={isLoading}
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
  status: 'success',
}
