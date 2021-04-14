import React from 'react'
import axios from 'axios'
import * as E from 'fp-ts/Either'
import * as TE from 'fp-ts/TaskEither'
import { Box, Typography } from '@material-ui/core'
import { Field, Form } from '../../elements'
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

const initialValues = {
  name: '',
  subject: '',
  email: '',
  message: '',
}

const toEmailShape = (fields: Fields): any =>
  Object.entries(fields).reduce(
    (acc, [key, { value }]) => Object.assign(acc, { [key]: value }),
    {}
  )

const requestEmail = (body: Email) => axios.post('/api/emailRequest', body)

export default function Contact() {
  const { fields, handleChange, validate } = useFields(initialValues)
  const cls = useStyles()

  const onSubmit = () =>
    validate()
      ? E.right(
          TE.tryCatch(
            () => requestEmail(toEmailShape(fields)),
            () => ({
              data: {
                error: true,
                message: 'Sorry. Please try this later.',
              },
            })
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
