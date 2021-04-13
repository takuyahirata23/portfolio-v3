import React from 'react'
import type { taskEither } from 'fp-ts'
import { Button, Box, Grid, LinearProgress } from '@material-ui/core'
import { useSubmit } from '../../hooks'
import SnackbarNotification from '../SnackbarNotification'
import useStyles from './useStyles'

type Props = {
  children: React.ReactNode
  onSubmit: any
  buttonText?: string
}

export default function Form({ buttonText, children, onSubmit }: Props) {
  const { error, isLoading, message, handleSubmit } = useSubmit(onSubmit)
  const cls = useStyles()

  return (
    <>
      {isLoading && (
        <LinearProgress
          style={{ position: 'fixed', top: 0, left: 0, right: 0 }}
        />
      )}
      <SnackbarNotification
        open={Boolean(message)}
        message={message}
        status={error ? 'error' : 'success'}
      />
      <Grid container component="form" onSubmit={handleSubmit} spacing={1}>
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
