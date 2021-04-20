import React from 'react'
import axios from 'axios'
import * as E from 'fp-ts/Either'
import * as TE from 'fp-ts/TaskEither'
import { Box, Typography } from '@material-ui/core'
import { Field, Form } from '../../elements'
import { useFields, useSubmit } from '../../hooks'
import useStyles from './useStyles'
import type { Fields, Email } from './types'
import { O } from '../../utils/types'

const initialValues = {
  name: '',
  subject: '',
  email: '',
  message: '',
}

const generateError = () => ({
  data: {
    error: true,
    message: 'Sorry. Please try this later.',
  },
})

const toEmailShape = (fields: Fields): any =>
  Object.entries(fields).reduce(
    (acc, [key, { value }]) => Object.assign(acc, { [key]: value }),
    {}
  )

const requestEmail = (body: Email) => () =>
  axios.post('/api/emailRequest', body)

const onSubmit = (validate: () => boolean, fields: O) => () =>
  validate()
    ? E.right(TE.tryCatch(requestEmail(toEmailShape(fields)), generateError))
    : E.left(null)

export default function Contact() {
  const { fields, handleChange, validate, resetFields } = useFields(
    initialValues
  )
  const { status, message, handleSubmit } = useSubmit(
    onSubmit(validate, fields)
  )
  const cls = useStyles()

  React.useEffect(() => {
    if (status === 'success') {
      resetFields()
    }
  }, [status])

  return (
    <Box className={cls.formWrapper}>
      <Typography variant="h3" gutterBottom>
        Questions? Get in touch!
      </Typography>
      <Form
        onSubmit={handleSubmit}
        buttonText="Send email"
        status={status}
        message={message}
      >
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
