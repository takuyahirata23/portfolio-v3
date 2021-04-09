import { Box, Typography } from '@material-ui/core'
import { Field, Form } from '../../elements'
import { useFields } from '../../hooks'
import useStyles from './useStyles'

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

export default function Contact() {
  const { fields, handleChange, validate, resetFields } = useFields(
    initialValues
  )
  const cls = useStyles()

  const onSubmit = (e: any) => {
    e.preventDefault()
    const res = validate()
    if (res) {
      emailRequest({
        email: fields.email.value,
        name: fields.name.value,
        subject: fields.subject.value,
        message: fields.message.value,
      })
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
      <Form onSubmit={onSubmit}>
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
      <button onClick={resetFields}>reset</button>
    </Box>
  )
}
