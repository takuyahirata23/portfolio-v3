import React from 'react'
import * as E from 'fp-ts/Either'
import * as TE from 'fp-ts/TaskEither'
import axios from 'axios'
import { mergeRight } from 'ramda'
import { Box, Typography } from '@material-ui/core'
import { Field, Form, SnackbarNotification } from '../../elements'
import { useFields } from '../../hooks'
import useStyles from './useStyles'

type Field = {
  value: any
  error: boolean
  helperText: string
}

type Fields = {
  [key: string]: Field
}

type Email = {
  name: string
  subject: string
  email: string
  message: string
}

type snackbarProps = {
  status: 'success' | 'error'
  showSnackbar: boolean
  message: string
}

const initialValues = {
  name: '',
  subject: '',
  email: '',
  message: '',
}

const requestEmail = (body: Email) => axios.post('/api/emailRequest', body)

const snackBarDefault: snackbarProps = {
  status: 'success',
  showSnackbar: false,
  message: '',
}

export default function Contact() {
  const { fields, handleChange, validate } = useFields(initialValues)
  const cls = useStyles()

  const onSubmit = () =>
    validate()
      ? E.right(
          TE.tryCatch(
            () => requestEmail(fields),
            () => ({ error: true, message: 'boo' })
          )
        )
      : E.left(null)

  return (
    <Box className={cls.formWrapper}>
      <Typography variant="h3" gutterBottom>
        Questions? Get in touch!
      </Typography>
      <Form onSubmit={onSubmit} buttonText="Send email">
        <Field
          name="name"
          onChange={handleChange}
          fromFields={fields.name}
          GridItemProps={{
            md: 6,
          }}
          required
        />
        <Field
          name="email"
          fromFields={fields.email}
          onChange={handleChange}
          GridItemProps={{
            md: 6,
          }}
          required
        />
        <Field
          name="subject"
          fromFields={fields.subject}
          onChange={handleChange}
          required
        />
        <Field
          name="message"
          fromFields={fields.message}
          onChange={handleChange}
          rows={5}
          multiline
          required
        />
      </Form>
    </Box>
  )
}
