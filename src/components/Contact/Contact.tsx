import React from 'react'
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

const initialValues = {
  name: '',
  subject: '',
  email: '',
  message: '',
}

const emailRequest = (body: Email) =>
  fetch('/api/emailRequest', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

const toBody = (fields: Fields): Email =>
  Object.entries(fields).reduce(
    (acc: any, [key, { value }]) => mergeRight(acc, { [key]: value }),
    {}
  )

export default function Contact() {
  const { fields, handleChange, validate, resetFields } = useFields(
    initialValues
  )
  const cls = useStyles()

  const onSubmit = (e: any) => {
    e.preventDefault()
    const res = validate()
    if (res) {
      emailRequest(toBody(fields))
        .then(res => res.json())
        .then(console.log)
        .catch(console.error)
    }
  }

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
